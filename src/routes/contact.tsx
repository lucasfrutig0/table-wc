import { Form } from 'react-router-dom'

type ContactType = {
  first: string
  last: string
  avatar: string
  twitter: string
  notes: string
  favorite: boolean
}

export default function Contact() {
  const contact: ContactType = {
    first: 'Your',
    last: 'Name',
    avatar: 'https://placekitten.com/g/200/200',
    twitter: 'your_handle',
    notes: 'Some notes',
    favorite: true,
  }

  function Favorite(isFavorite: Pick<ContactType, 'favorite'>) {
    // yes, this is a `let` for later
    return (
      <Form method='post'>
        <button
          name='favorite'
          value={isFavorite ? 'false' : 'true'}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </Form>
    )
  }

  return (
    <div id='contact'>
      <div>
        <img key={contact.avatar} src={contact.avatar} alt='avatar' />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite favorite={contact.favorite} />
        </h1>

        {contact.twitter && (
          <p>
            <a target='_blank' href={`https://twitter.com/${contact.twitter}`} rel='noreferrer'>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action='edit'>
            <button type='submit'>Edit</button>
          </Form>
          <Form
            method='post'
            action='destroy'
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault()
              }
            }}
          >
            <button type='submit'>Delete</button>
          </Form>
        </div>
      </div>
    </div>
  )
}

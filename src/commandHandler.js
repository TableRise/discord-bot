const { ApplicationCommandOptionType } = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()

async function createCmd(Client) {
  const data = [
    {
      name: 'ping',
      description: '🛡 Pong!'
    },
    {
      name: 'say',
      description: '🛡 Envia uma mensagem',
      options: [
        {
          name: 'channel',
          type: ApplicationCommandOptionType.Channel,
          description: 'Canal de destino.',
          required: true
        },
        {
          name: 'text',
          type: ApplicationCommandOptionType.String,
          description: 'Insira a mensagem.',
          required: true
        },
        {
          name: 'add1',
          type: ApplicationCommandOptionType.String,
          description: 'Adicionar um parágrafo.',
          required: false
        },
        {
          name: 'add2',
          type: ApplicationCommandOptionType.String,
          description: 'Adicionar um parágrafo.',
          required: false
        },
        {
          name: 'add3',
          type: ApplicationCommandOptionType.String,
          description: 'Adicionar um parágrafo.',
          required: false
        },
        {
          name: 'add4',
          type: ApplicationCommandOptionType.String,
          description: 'Adicionar um parágrafo.',
          required: false
        },
        {
          name: 'add5',
          type: ApplicationCommandOptionType.String,
          description: 'Adicionar um parágrafo.',
          required: false
        },
        {
          name: 'add6',
          type: ApplicationCommandOptionType.String,
          description: 'Adicionar um parágrafo.',
          required: false
        },
        {
          name: 'add7',
          type: ApplicationCommandOptionType.String,
          description: 'Adicionar um parágrafo.',
          required: false
        },
        {
          name: 'add8',
          type: ApplicationCommandOptionType.String,
          description: 'Adicionar um parágrafo.',
          required: false
        },
        {
          name: 'add9',
          type: ApplicationCommandOptionType.String,
          description: 'Adicionar um parágrafo.',
          required: false
        }
      ]
    },
    {
      name: 'url',
      description: '🛡 Link usando markdown',
      options: [
        {
          name: 'title',
          type: ApplicationCommandOptionType.String,
          description: 'Adicione o texto alternativo',
          required: true
        },
        {
          name: 'url',
          type: ApplicationCommandOptionType.String,
          description: 'Adicione o texto alternativo',
          required: true
        }
      ]
    },
    {
      name: 'media',
      description: '🛡 Envia uma imagem',
      options: [
        {
          name: 'channel',
          type: ApplicationCommandOptionType.Channel,
          description: 'Canal de destino.',
          required: true
        },
        {
          name: 'img',
          type: ApplicationCommandOptionType.String,
          description: 'Link da imagem',
          required: true
        },
        {
          name: 'alt',
          type: ApplicationCommandOptionType.String,
          description: 'Adicione o texto alternativo',
          required: true
        }
      ]
    },
    {
      name: 'sugestao',
      description: 'Dê sugestões para o projeto'
    },
    {
      name: 'bug',
      description: 'Reporte bugs'
    },
    {
      name: 'support',
      description: 'Solicitar ajuda do suporte'
    }
  ]

  await Client.guilds.cache.get(process.env.GUILD_ID)?.commands.set(data)
}

async function globalCmd(Client) {
  const data = [
    {
      name: 'ping',
      description: 'Pong!'
    }
  ]
  await Client.application?.commands.set(data)
}

module.exports = { createCmd, globalCmd }

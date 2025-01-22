module.exports = {
  AdminApiToken: {
    collectionName: 'strapi_api_tokens',
    info: {
      description: '',
      displayName: 'Api Token',
      name: 'Api Token',
      pluralName: 'api-tokens',
      singularName: 'api-token',
    },
    options: {
      draftAndPublish: false,
    },
    pluginOptions: {
      'content-manager': {
        visible: false,
      },
      'content-type-builder': {
        visible: false,
      },
    },
    attributes: {
      accessKey: {
        type: 'string',
        required: true,
        minLength: 1,
      },
      createdAt: { type: 'datetime' },
      createdBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
      description: {
        type: 'string',
        minLength: 1,
        defaultTo: '',
      },
      expiresAt: { type: 'datetime' },
      lastUsedAt: { type: 'datetime' },
      lifespan: { type: 'bigint' },
      locale: { type: 'string', private: true },
      localizations: { type: 'relation', relation: 'oneToMany', target: 'admin::api-token', private: true },
      name: {
        type: 'string',
        required: true,
        unique: true,
        minLength: 1,
      },
      permissions: { type: 'relation', relation: 'oneToMany', target: 'admin::api-token-permission' },
      publishedAt: { type: 'datetime' },
      type: {
        type: 'enumeration',
        enum: ['read-only', 'full-access', 'custom'],
        required: true,
        defaultTo: 'read-only',
      },
      updatedAt: { type: 'datetime' },
      updatedBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
    },
  },
  
  AdminApiTokenPermission: {
    collectionName: 'strapi_api_token_permissions',
    info: {
      description: '',
      displayName: 'API Token Permission',
      name: 'API Token Permission',
      pluralName: 'api-token-permissions',
      singularName: 'api-token-permission',
    },
    options: {
      draftAndPublish: false,
    },
    pluginOptions: {
      'content-manager': {
        visible: false,
      },
      'content-type-builder': {
        visible: false,
      },
    },
    attributes: {
      action: {
        type: 'string',
        required: true,
        minLength: 1,
      },
      createdAt: { type: 'datetime' },
      createdBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
      locale: { type: 'string', private: true },
      localizations: { type: 'relation', relation: 'oneToMany', target: 'admin::api-token-permission', private: true },
      publishedAt: { type: 'datetime' },
      token: { type: 'relation', relation: 'manyToOne', target: 'admin::api-token' },
      updatedAt: { type: 'datetime' },
      updatedBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
    },
  },

  AdminPermission: {
    collectionName: 'admin_permissions',
    info: {
      description: '',
      displayName: 'Permission',
      name: 'Permission',
      pluralName: 'permissions',
      singularName: 'permission',
    },
    options: {
      draftAndPublish: false,
    },
    pluginOptions: {
      'content-manager': {
        visible: false,
      },
      'content-type-builder': {
        visible: false,
      },
    },
    attributes: {
      action: {
        type: 'string',
        required: true,
        minLength: 1,
      },
      actionParameters: { type: 'json', defaultTo: {} },
      conditions: { type: 'json', defaultTo: [] },
      createdAt: { type: 'datetime' },
      createdBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
      locale: { type: 'string', private: true },
      localizations: { type: 'relation', relation: 'oneToMany', target: 'admin::permission', private: true },
      properties: { type: 'json', defaultTo: {} },
      publishedAt: { type: 'datetime' },
      role: { type: 'relation', relation: 'manyToOne', target: 'admin::role' },
      subject: {
        type: 'string',
        minLength: 1,
      },
      updatedAt: { type: 'datetime' },
      updatedBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
    },
  },

  AdminRole: {
    collectionName: 'admin_roles',
    info: {
      description: '',
      displayName: 'Role',
      name: 'Role',
      pluralName: 'roles',
      singularName: 'role',
    },
    options: {
      draftAndPublish: false,
    },
    pluginOptions: {
      'content-manager': {
        visible: false,
      },
      'content-type-builder': {
        visible: false,
      },
    },
    attributes: {
      code: {
        type: 'string',
        required: true,
        unique: true,
        minLength: 1,
      },
      createdAt: { type: 'datetime' },
      createdBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
      description: { type: 'string' },
      locale: { type: 'string', private: true },
      localizations: { type: 'relation', relation: 'oneToMany', target: 'admin::role', private: true },
      name: {
        type: 'string',
        required: true,
        unique: true,
        minLength: 1,
      },
      permissions: { type: 'relation', relation: 'oneToMany', target: 'admin::permission' },
      publishedAt: { type: 'datetime' },
      updatedAt: { type: 'datetime' },
      updatedBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
      users: { type: 'relation', relation: 'manyToMany', target: 'admin::user' },
    },
  },

  AdminUser: {
    collectionName: 'admin_users',
    info: {
      description: '',
      displayName: 'User',
      name: 'User',
      pluralName: 'users',
      singularName: 'user',
    },
    options: {
      draftAndPublish: false,
    },
    pluginOptions: {
      'content-manager': {
        visible: false,
      },
      'content-type-builder': {
        visible: false,
      },
    },
    attributes: {
      blocked: { type: 'boolean', private: true, defaultTo: false },
      createdAt: { type: 'datetime' },
      createdBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
      email: {
        type: 'email',
        required: true,
        private: true,
        unique: true,
        minLength: 6,
      },
      firstname: { type: 'string', minLength: 1 },
      isActive: { type: 'boolean', private: true, defaultTo: false },
      lastname: { type: 'string', minLength: 1 },
      locale: { type: 'string', private: true },
      localizations: { type: 'relation', relation: 'oneToMany', target: 'admin::user', private: true },
      password: {
        type: 'password',
        private: true,
        minLength: 6,
      },
      preferedLanguage: { type: 'string' },
      publishedAt: { type: 'datetime' },
      registrationToken: { type: 'string', private: true },
      resetPasswordToken: { type: 'string', private: true },
      roles: { type: 'relation', relation: 'manyToMany', target: 'admin::role', private: true },
      updatedAt: { type: 'datetime' },
      updatedBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
      username: { type: 'string' },
    },
  },

  PluginContentReleasesRelease: {
    collectionName: 'strapi_releases',
    info: {
      displayName: 'Release',
      pluralName: 'releases',
      singularName: 'release',
    },
    options: {
      draftAndPublish: false,
    },
    pluginOptions: {
      'content-manager': {
        visible: false,
      },
      'content-type-builder': {
        visible: false,
      },
    },
    attributes: {
      actions: { type: 'relation', relation: 'oneToMany', target: 'plugin::content-releases.release-action' },
      createdAt: { type: 'datetime' },
      createdBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
      locale: { type: 'string', private: true },
      localizations: { type: 'relation', relation: 'oneToMany', target: 'plugin::content-releases.release', private: true },
      name: { type: 'string', required: true },
      publishedAt: { type: 'datetime' },
      releasedAt: { type: 'datetime' },
      scheduledAt: { type: 'datetime' },
      status: {
        type: 'enumeration',
        enum: ['ready', 'blocked', 'failed', 'done', 'empty'],
        required: true,
      },
      timezone: { type: 'string' },
      updatedAt: { type: 'datetime' },
      updatedBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
    },
  },

  PluginContentReleasesReleaseAction: {
    collectionName: 'strapi_release_actions',
    info: {
      displayName: 'Release Action',
      pluralName: 'release-actions',
      singularName: 'release-action',
    },
    options: {
      draftAndPublish: false,
    },
    pluginOptions: {
      'content-manager': {
        visible: false,
      },
      'content-type-builder': {
        visible: false,
      },
    },
    attributes: {
      release: { type: 'relation', relation: 'manyToOne', target: 'plugin::content-releases.release' },
      status: { type: 'string' },
      target: { type: 'string' },
      type: { type: 'string' },
      value: { type: 'json' },
      createdAt: { type: 'datetime' },
      createdBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
      locale: { type: 'string', private: true },
      localizations: { type: 'relation', relation: 'oneToMany', target: 'plugin::content-releases.release-action', private: true },
      updatedAt: { type: 'datetime' },
      updatedBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
    },
  },
};

const PluginReviewWorkflowsWorkflow = {
  collectionName: 'strapi_workflows',
  info: {
    description: '',
    displayName: 'Workflow',
    name: 'Workflow',
    pluralName: 'workflows',
    singularName: 'workflow',
  },
  options: {
    draftAndPublish: false,
  },
  pluginOptions: {
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: false,
    },
  },
  attributes: {
    contentTypes: { type: 'json', required: true, defaultTo: '[]' },
    createdAt: { type: 'datetime' },
    createdBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
    locale: { type: 'string', private: true },
    localizations: { type: 'relation', relation: 'oneToMany', target: 'plugin::review-workflows.workflow', private: true },
    name: { type: 'string', required: true, unique: true },
    publishedAt: { type: 'datetime' },
    stageRequiredToPublish: { type: 'relation', relation: 'oneToOne', target: 'plugin::review-workflows.workflow-stage' },
    stages: { type: 'relation', relation: 'oneToMany', target: 'plugin::review-workflows.workflow-stage' },
    updatedAt: { type: 'datetime' },
    updatedBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
  },
};

const PluginReviewWorkflowsWorkflowStage = {
  collectionName: 'strapi_workflows_stages',
  info: {
    description: '',
    displayName: 'Stages',
    name: 'Workflow Stage',
    pluralName: 'workflow-stages',
    singularName: 'workflow-stage',
  },
  options: {
    draftAndPublish: false,
    version: '1.1.0',
  },
  pluginOptions: {
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: false,
    },
  },
  attributes: {
    color: { type: 'string', defaultTo: '#4945FF' },
    createdAt: { type: 'datetime' },
    createdBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
    locale: { type: 'string', private: true },
    localizations: { type: 'relation', relation: 'oneToMany', target: 'plugin::review-workflows.workflow-stage', private: true },
    name: { type: 'string' },
    permissions: { type: 'relation', relation: 'manyToMany', target: 'admin::permission' },
    publishedAt: { type: 'datetime' },
    updatedAt: { type: 'datetime' },
    updatedBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
    workflow: { type: 'relation', relation: 'manyToOne', target: 'plugin::review-workflows.workflow' },
  },
};

const PluginUploadFile = {
  collectionName: 'files',
  info: {
    description: '',
    displayName: 'File',
    pluralName: 'files',
    singularName: 'file',
  },
  options: {
    draftAndPublish: false,
  },
  pluginOptions: {
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: false,
    },
  },
  attributes: {
    alternativeText: { type: 'string' },
    caption: { type: 'string' },
    createdAt: { type: 'datetime' },
    createdBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
    ext: { type: 'string' },
    folder: { type: 'relation', relation: 'manyToOne', target: 'plugin::upload.folder', private: true },
    folderPath: { type: 'string', required: true, private: true },
    formats: { type: 'json' },
    hash: { type: 'string', required: true },
    height: { type: 'integer' },
    locale: { type: 'string', private: true },
    localizations: { type: 'relation', relation: 'oneToMany', target: 'plugin::upload.file', private: true },
    mime: { type: 'string', required: true },
    name: { type: 'string', required: true },
    previewUrl: { type: 'string' },
    provider: { type: 'string', required: true },
    provider_metadata: { type: 'json' },
    publishedAt: { type: 'datetime' },
    related: { type: 'relation', relation: 'morphToMany' },
    size: { type: 'decimal', required: true },
    updatedAt: { type: 'datetime' },
    updatedBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
    url: { type: 'string', required: true },
    width: { type: 'integer' },
  },
};

const PluginUploadFolder = {
  collectionName: 'upload_folders',
  info: {
    displayName: 'Folder',
    pluralName: 'folders',
    singularName: 'folder',
  },
  options: {
    draftAndPublish: false,
  },
  pluginOptions: {
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: false,
    },
  },
  attributes: {
    children: { type: 'relation', relation: 'oneToMany', target: 'plugin::upload.folder' },
    createdAt: { type: 'datetime' },
    createdBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
    files: { type: 'relation', relation: 'oneToMany', target: 'plugin::upload.file' },
    locale: { type: 'string', private: true },
    localizations: { type: 'relation', relation: 'oneToMany', target: 'plugin::upload.folder', private: true },
    name: { type: 'string', required: true },
    parent: { type: 'relation', relation: 'manyToOne', target: 'plugin::upload.folder' },
    path: { type: 'string', required: true },
    pathId: { type: 'integer', required: true, unique: true },
    publishedAt: { type: 'datetime' },
    updatedAt: { type: 'datetime' },
    updatedBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
  },
};

const PluginUsersPermissionsPermission = {
  collectionName: 'up_permissions',
  info: {
    description: '',
    displayName: 'Permission',
    name: 'permission',
    pluralName: 'permissions',
    singularName: 'permission',
  },
  options: {
    draftAndPublish: false,
  },
  pluginOptions: {
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: false,
    },
  },
  attributes: {
    action: { type: 'string', required: true },
    createdAt: { type: 'datetime' },
    createdBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
    locale: { type: 'string', private: true },
    localizations: { type: 'relation', relation: 'oneToMany', target: 'plugin::users-permissions.permission', private: true },
    publishedAt: { type: 'datetime' },
    role: { type: 'relation', relation: 'manyToOne', target: 'plugin::users-permissions.role' },
    updatedAt: { type: 'datetime' },
    updatedBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
  },
};

const PluginUsersPermissionsRole = {
  collectionName: 'up_roles',
  info: {
    description: '',
    displayName: 'Role',
    name: 'role',
    pluralName: 'roles',
    singularName: 'role',
  },
  options: {
    draftAndPublish: false,
  },
  pluginOptions: {
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: false,
    },
  },
  attributes: {
    createdAt: { type: 'datetime' },
    createdBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
    description: { type: 'string' },
    locale: { type: 'string', private: true },
    localizations: { type: 'relation', relation: 'oneToMany', target: 'plugin::users-permissions.role', private: true },
    name: { type: 'string', required: true },
    permissions: { type: 'relation', relation: 'oneToMany', target: 'plugin::users-permissions.permission' },
    publishedAt: { type: 'datetime' },
    type: { type: 'string', unique: true },
    updatedAt: { type: 'datetime' },
    updatedBy: { type: 'relation', relation: 'oneToOne', target: 'admin::user', private: true },
    users: { type: 'relation', relation: 'oneToMany', target: 'plugin::users-permissions.user' },
  },
};

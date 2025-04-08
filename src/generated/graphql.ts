export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  URL: { input: any; output: any; }
};

/** An Account represents the accounting of a banking relationship. */
export type Account = {
  __typename?: 'Account';
  /** The most recent Balance for the Account. */
  balance?: Maybe<Balance>;
  /** The primary Connection for this Account. */
  connection?: Maybe<Connection>;
  /** The ISO-4217 currency code of the Account */
  currencyCode?: Maybe<CurrencyCode>;
  /** The Account's list of Investment Holdings. */
  holdings?: Maybe<HoldingConnection>;
  /** The ID of the Account. */
  id: Scalars['ID']['output'];
  /** The Institution where the Account is held. */
  institution: Institution;
  /** Represents the classification of an Account. */
  kind?: Maybe<AccountKind>;
  /** A mostly unique identifier, typically the last 4 numbers of the Account. */
  mask?: Maybe<Scalars['String']['output']>;
  /**
   * Custom metadata about the Account, stored in a 'key-value' format.
   *
   * See the [Custom Metadata](https://quiltt.dev/api/custom-metadata) guide for more information and examples.
   *
   */
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** The Name of the Account */
  name: Scalars['String']['output'];
  /** @deprecated Use `provider` */
  origin: ConnectionProvider;
  /** The Account's list of Account Owners. */
  owners?: Maybe<Array<AccountOwner>>;
  /** The original provider of the Account. */
  provider: ConnectionProvider;
  /**
   * The Remote Data associated with the Account.
   *
   * See the [Remote Data guide](https://quiltt.dev/api/remote-data) for more information.
   *
   */
  remoteData?: Maybe<AccountRemoteData>;
  /** The State of the Account */
  state: AccountState;
  /** The Account's list of Statements. */
  statements?: Maybe<StatementConnection>;
  /**
   * Represents the taxonomic hierarchy of an Account, as an array of Taxonomy Members.
   *
   * Level 1: The balance sheet category - ASSET or LIABILITY
   * Level 2: The high-level classification - DEPOSITORY, INVESTMENT, LOAN, or CREDIT
   * Level 3 and beyond: The specific classification of the Account - SPENDING, SAVINGS, etc.
   *
   */
  taxonomy: Array<AccountTaxonomyMember>;
  /** The date of the earliest known Transaction. */
  transactedFirstOn?: Maybe<Scalars['Date']['output']>;
  /** The date of the most recent known Transaction. */
  transactedLastOn?: Maybe<Scalars['Date']['output']>;
  /** A paginated list of Transactions. */
  transactions: TransactionConnection;
  /**
   * Represents the classification of an Account.
   * @deprecated Use `kind` or `taxonomy`
   */
  type: AccountType;
  /** Specifies whether the Account has been verified for money movement. */
  verified: Scalars['Boolean']['output'];
};


/** An Account represents the accounting of a banking relationship. */
export type AccountHoldingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** An Account represents the accounting of a banking relationship. */
export type AccountStatementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StatementFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<StatementSort>;
};


/** An Account represents the accounting of a banking relationship. */
export type AccountTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<TransactionSort>;
};

/** Options for filtering Accounts. */
export type AccountFilter = {
  /**
   * Filter accounts by the status of its Connection.
   *
   * Examples:
   * - `{ status: SYNCED }` to only return Connections that are successfully synced
   * - `{ status: ERROR_REPAIRABLE }` to only return Connections that need to be reconnected
   * - `{ status: [INITIALIZING SYNCING] }` to only return Connections that are in the process of syncing
   *
   */
  connection_status?: InputMaybe<Array<ConnectionStatus>>;
  /**
   * Exclude accounts by the status of its Connection.
   *
   * Examples:
   * - `{ status_not: DISCONNECTED }` to exclude disconnected Accounts.
   * - `{ status_not: [INITIALIZING SYNCING] }` to exclude Accounts that are syncing
   *
   */
  connection_status_not?: InputMaybe<Array<ConnectionStatus>>;
  /** The Account classifications to include, supplied as an array or a single value. */
  kind?: InputMaybe<Array<AccountKind>>;
  /** The Account classifications to exclude, supplied as an array or a single value. */
  kind_not?: InputMaybe<Array<AccountKind>>;
  /**
   * Filter by the contents of Account `metadata`.
   *
   * Examples:
   * - `{ metadata: { hidden: true } }` to only return Accounts marked as "hidden" in your metadata
   * - `{ metadata: { internal_id: "acnt_12345" } }` to only return Accounts that match your internal ID
   * - `{ metadata: null }` to only return Accounts without metadata
   *
   */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  /** The date of the earliest known Transaction. */
  transactedFirstOn?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than the date of the earliest known Transaction. */
  transactedFirstOn_gt?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than or equal to the date of the earliest known Transaction. */
  transactedFirstOn_gte?: InputMaybe<Scalars['Date']['input']>;
  /** Less than the date of the earliest known Transaction. */
  transactedFirstOn_lt?: InputMaybe<Scalars['Date']['input']>;
  /** Less than or equal to the date of the earliest known Transaction. */
  transactedFirstOn_lte?: InputMaybe<Scalars['Date']['input']>;
  /** The date of the most recent known Transaction. */
  transactedLastOn?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than the date of the most recent known Transaction. */
  transactedLastOn_gt?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than or equal to the date of the most recent known Transaction. */
  transactedLastOn_gte?: InputMaybe<Scalars['Date']['input']>;
  /** Less than the date of the most recent known Transaction. */
  transactedLastOn_lt?: InputMaybe<Scalars['Date']['input']>;
  /** Less than or equal to the date of the most recent known Transaction. */
  transactedLastOn_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Filter by whether Accounts have been verified for money movement. */
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Represents the classification of an Account. */
export enum AccountKind {
  /** Credit cards, and Lines of Credit. */
  Credit = 'CREDIT',
  /** Checking, Savings and cash management. */
  Depository = 'DEPOSITORY',
  /** Brokerage, retirement and other investments. */
  Investment = 'INVESTMENT',
  /** Mortgage, student and installment loans. */
  Loan = 'LOAN'
}

/** Options for filtering Merchants. */
export type AccountMerchantFilter = {
  /** The date of the first Transaction. */
  transactedFirstOn?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than the date of the first Transaction. */
  transactedFirstOn_gt?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than or equal to the date of the first Transaction. */
  transactedFirstOn_gte?: InputMaybe<Scalars['Date']['input']>;
  /** Less than the date of the first Transaction. */
  transactedFirstOn_lt?: InputMaybe<Scalars['Date']['input']>;
  /** Less than or equal to the date of the first Transaction. */
  transactedFirstOn_lte?: InputMaybe<Scalars['Date']['input']>;
  /** The date of the most recent Transaction. */
  transactedLastOn?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than the date of the most recent Transaction. */
  transactedLastOn_gt?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than or equal to the date of the most recent Transaction. */
  transactedLastOn_gte?: InputMaybe<Scalars['Date']['input']>;
  /** Less than the date of the most recent Transaction. */
  transactedLastOn_lt?: InputMaybe<Scalars['Date']['input']>;
  /** Less than or equal to the date of the most recent Transaction. */
  transactedLastOn_lte?: InputMaybe<Scalars['Date']['input']>;
};

/** Autogenerated input type of AccountMerchantUpdate */
export type AccountMerchantUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the Merchant to be updated. */
  id: Scalars['ID']['input'];
  /** Customizable metadata. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

/** Autogenerated return type of AccountMerchantUpdate. */
export type AccountMerchantUpdatePayload = {
  __typename?: 'AccountMerchantUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** The updated merchant. */
  record?: Maybe<Merchant>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Represents the registered details of an Account Owner. */
export type AccountOwner = {
  __typename?: 'AccountOwner';
  /** The registered addresses of the Account Owner. */
  addresses?: Maybe<Array<Address>>;
  /** The registered email addresses of the Account Owner. */
  emails?: Maybe<Array<Email>>;
  /** The ID of the Account Owner. */
  id: Scalars['ID']['output'];
  /** The registered legal names of the Account Owner. */
  names?: Maybe<Array<Name>>;
  /** The registered phone numbers of the Account Owner. */
  phones?: Maybe<Array<Phone>>;
  /** The remote data associated with an Account Owner. */
  remoteData?: Maybe<AccountOwnerRemoteData>;
};

/** Remote data associated with an Account Owner. */
export type AccountOwnerRemoteData = {
  __typename?: 'AccountOwnerRemoteData';
  /** The Finicity remote data associated with the Account Owner. */
  finicity?: Maybe<AccountOwnerRemoteDataFinicity>;
  /** The Mock remote data associated with the Account Owner. */
  mock?: Maybe<AccountOwnerRemoteDataMock>;
};

/** Finicity Account Owner Remote Data */
export type AccountOwnerRemoteDataFinicity = {
  __typename?: 'AccountOwnerRemoteDataFinicity';
  /** Finicity Account Owner Remote Data */
  owner?: Maybe<AccountRemoteDataFinicityOwner>;
};

/** Mock Account Owner Remote Data */
export type AccountOwnerRemoteDataMock = {
  __typename?: 'AccountOwnerRemoteDataMock';
  /** Mock Account Owner Remote Data */
  owner?: Maybe<AccountRemoteDataMockOwner>;
};

/** Remote data associated with an Account. */
export type AccountRemoteData = {
  __typename?: 'AccountRemoteData';
  /** The Finicity remote data associated with the Account. */
  finicity?: Maybe<AccountRemoteDataFinicity>;
  /** The Mock remote data associated with the Account. */
  mock?: Maybe<AccountRemoteDataMock>;
};

/** Account-level data from Finicity. */
export type AccountRemoteDataFinicity = {
  __typename?: 'AccountRemoteDataFinicity';
  /** The base Account data from Finicity. */
  account?: Maybe<AccountRemoteDataFinicityAccount>;
};

/** The Account data from Finicity. */
export type AccountRemoteDataFinicityAccount = {
  __typename?: 'AccountRemoteDataFinicityAccount';
  /** The record's Finicity ID. */
  id: Scalars['String']['output'];
  /** The response body. */
  response?: Maybe<RemoteDataFinicityCustomerAccount>;
  /** The date and time when the data was fetched. */
  timestamp: Scalars['DateTime']['output'];
};

/** The Owner data from Finicity. */
export type AccountRemoteDataFinicityOwner = {
  __typename?: 'AccountRemoteDataFinicityOwner';
  /** The record's Finicity ID. */
  id: Scalars['String']['output'];
  /** The response body. */
  response?: Maybe<RemoteDataFinicityAccountOwnerDetails>;
  /** The date and time when the data was fetched. */
  timestamp: Scalars['DateTime']['output'];
};

/** Account-level data from Mock. */
export type AccountRemoteDataMock = {
  __typename?: 'AccountRemoteDataMock';
  /** The base Account data from Mock. */
  account?: Maybe<AccountRemoteDataMockAccount>;
};

/** The Account data from Mock. */
export type AccountRemoteDataMockAccount = {
  __typename?: 'AccountRemoteDataMockAccount';
  /** The record's Mock ID. */
  id: Scalars['String']['output'];
  /** The response body. */
  response?: Maybe<RemoteDataMockAccount>;
  /** The date and time when the data was fetched. */
  timestamp: Scalars['DateTime']['output'];
};

/** The Owner data from Mock. */
export type AccountRemoteDataMockOwner = {
  __typename?: 'AccountRemoteDataMockOwner';
  /** The record's Mock ID. */
  id: Scalars['String']['output'];
  /** The response body. */
  response?: Maybe<RemoteDataMockOwner>;
  /** The date and time when the data was fetched. */
  timestamp: Scalars['DateTime']['output'];
};

/** Options for sorting Accounts. */
export enum AccountSort {
  /** Least-recently used first, most-recently used last */
  LastTransactedOnAsc = 'LAST_TRANSACTED_ON_ASC',
  /** Most-recently used first, least-recently used last */
  LastTransactedOnDesc = 'LAST_TRANSACTED_ON_DESC'
}

/** Represents the current state of an Account. */
export enum AccountState {
  /** Terminated */
  Closed = 'CLOSED',
  /** Open */
  Open = 'OPEN'
}

/** Represents a member of the Account classification taxonomy */
export enum AccountTaxonomyMember {
  /** Level 1: A financial resource expected to provide future benefits. */
  Asset = 'ASSET',
  /** Level 3+: Auto Account */
  Auto = 'AUTO',
  /** Level 3+: Card Account */
  Card = 'CARD',
  /** Level 3+: Cash Management Account */
  CashManagement = 'CASH_MANAGEMENT',
  /** Level 3+: Certificate Of Deposit Account */
  CertificateOfDeposit = 'CERTIFICATE_OF_DEPOSIT',
  /** Level 2: Credit cards, and Lines of Credit. */
  Credit = 'CREDIT',
  /** Level 2: Checking, Savings and cash management. */
  Depository = 'DEPOSITORY',
  /** Level 3+: Electronic Benefit Transfer Account */
  ElectronicBenefitTransfer = 'ELECTRONIC_BENEFIT_TRANSFER',
  /** Level 3+: Health Savings Account */
  HealthSavingsAccount = 'HEALTH_SAVINGS_ACCOUNT',
  /** Level 3+: Home Equity Account */
  HomeEquity = 'HOME_EQUITY',
  /** Level 2: Brokerage, retirement and other investments. */
  Investment = 'INVESTMENT',
  /** Level 1: A financial obligation or debt owed to another party. */
  Liability = 'LIABILITY',
  /** Level 3+: Line Of Credit Account */
  LineOfCredit = 'LINE_OF_CREDIT',
  /** Level 2: Mortgage, student and installment loans. */
  Loan = 'LOAN',
  /** Level 3+: Money Market Account */
  MoneyMarket = 'MONEY_MARKET',
  /** Level 3+: Mortgage Account */
  Mortgage = 'MORTGAGE',
  /** Level 3+: Prepaid Account */
  Prepaid = 'PREPAID',
  /** Level 3+: Retirement Account */
  Retirement = 'RETIREMENT',
  /** Level 3+: Savings Account */
  Savings = 'SAVINGS',
  /** Level 3+: Spending Account */
  Spending = 'SPENDING',
  /** Level 3+: Student Account */
  Student = 'STUDENT'
}

/** Represents the classification of an Account. */
export enum AccountType {
  /** Checking and cash management. */
  Checking = 'CHECKING',
  /** Credit cards. */
  Credit = 'CREDIT',
  /** Brokerage, retirement and other investments. */
  Investment = 'INVESTMENT',
  /** Lines of credit, mortgage, student and installment loans. */
  Loan = 'LOAN',
  /** All other Account types. */
  Other = 'OTHER',
  /** Savings and money market. */
  Savings = 'SAVINGS'
}

/** Autogenerated input type of AccountUpdate */
export type AccountUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the Account to be updated. */
  id: Scalars['ID']['input'];
  /** Customizable metadata. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

/** Autogenerated return type of AccountUpdate. */
export type AccountUpdatePayload = {
  __typename?: 'AccountUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** The updated Account. */
  record?: Maybe<Account>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Autogenerated return type of AccountVerified. */
export type AccountVerifiedPayload = {
  __typename?: 'AccountVerifiedPayload';
  /** The verified Account */
  account?: Maybe<Account>;
};

/** The legal address associated with the Profile. */
export type Address = {
  __typename?: 'Address';
  /** The city. */
  city?: Maybe<Scalars['String']['output']>;
  /** The short name of the country. */
  country?: Maybe<Scalars['String']['output']>;
  /** ISO 3166-1 alpha-3 country code. */
  countryCode?: Maybe<AddressCountryCode>;
  /** The first line of the address. */
  line1?: Maybe<Scalars['String']['output']>;
  /** The second line of the address. */
  line2?: Maybe<Scalars['String']['output']>;
  /** The third line of the address. */
  line3?: Maybe<Scalars['String']['output']>;
  /** The postal code or zip code. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The state or province. */
  region?: Maybe<Scalars['String']['output']>;
  /** The two letter state or province code if available */
  regionCode?: Maybe<Scalars['String']['output']>;
};

/** ISO 3166-1 alpha-3 country code. */
export enum AddressCountryCode {
  /** Aruba */
  Abw = 'ABW',
  /** Afghanistan */
  Afg = 'AFG',
  /** Angola */
  Ago = 'AGO',
  /** Anguilla */
  Aia = 'AIA',
  /** Åland Islands */
  Ala = 'ALA',
  /** Albania */
  Alb = 'ALB',
  /** Andorra */
  And = 'AND',
  /** United Arab Emirates */
  Are = 'ARE',
  /** Argentina */
  Arg = 'ARG',
  /** Armenia */
  Arm = 'ARM',
  /** American Samoa */
  Asm = 'ASM',
  /** Antarctica */
  Ata = 'ATA',
  /** French Southern Territories */
  Atf = 'ATF',
  /** Antigua and Barbuda */
  Atg = 'ATG',
  /** Australia */
  Aus = 'AUS',
  /** Austria */
  Aut = 'AUT',
  /** Azerbaijan */
  Aze = 'AZE',
  /** Burundi */
  Bdi = 'BDI',
  /** Belgium */
  Bel = 'BEL',
  /** Benin */
  Ben = 'BEN',
  /** Bonaire, Sint Eustatius and Saba */
  Bes = 'BES',
  /** Burkina Faso */
  Bfa = 'BFA',
  /** Bangladesh */
  Bgd = 'BGD',
  /** Bulgaria */
  Bgr = 'BGR',
  /** Bahrain */
  Bhr = 'BHR',
  /** Bahamas */
  Bhs = 'BHS',
  /** Bosnia and Herzegovina */
  Bih = 'BIH',
  /** Saint Barthélemy */
  Blm = 'BLM',
  /** Belarus */
  Blr = 'BLR',
  /** Belize */
  Blz = 'BLZ',
  /** Bermuda */
  Bmu = 'BMU',
  /** Bolivia (Plurinational State of) */
  Bol = 'BOL',
  /** Brazil */
  Bra = 'BRA',
  /** Barbados */
  Brb = 'BRB',
  /** Brunei Darussalam */
  Brn = 'BRN',
  /** Bhutan */
  Btn = 'BTN',
  /** Bouvet Island */
  Bvt = 'BVT',
  /** Botswana */
  Bwa = 'BWA',
  /** Central African Republic */
  Caf = 'CAF',
  /** Canada */
  Can = 'CAN',
  /** Cocos (Keeling) Islands */
  Cck = 'CCK',
  /** Switzerland */
  Che = 'CHE',
  /** Chile */
  Chl = 'CHL',
  /** China */
  Chn = 'CHN',
  /** Côte d'Ivoire */
  Civ = 'CIV',
  /** Cameroon */
  Cmr = 'CMR',
  /** Congo (Democratic Republic of the) */
  Cod = 'COD',
  /** Congo */
  Cog = 'COG',
  /** Cook Islands */
  Cok = 'COK',
  /** Colombia */
  Col = 'COL',
  /** Comoros */
  Com = 'COM',
  /** Cabo Verde */
  Cpv = 'CPV',
  /** Costa Rica */
  Cri = 'CRI',
  /** Cuba */
  Cub = 'CUB',
  /** Curaçao */
  Cuw = 'CUW',
  /** Christmas Island */
  Cxr = 'CXR',
  /** Cayman Islands */
  Cym = 'CYM',
  /** Cyprus */
  Cyp = 'CYP',
  /** Czechia */
  Cze = 'CZE',
  /** Germany */
  Deu = 'DEU',
  /** Djibouti */
  Dji = 'DJI',
  /** Dominica */
  Dma = 'DMA',
  /** Denmark */
  Dnk = 'DNK',
  /** Dominican Republic */
  Dom = 'DOM',
  /** Algeria */
  Dza = 'DZA',
  /** Ecuador */
  Ecu = 'ECU',
  /** Egypt */
  Egy = 'EGY',
  /** Eritrea */
  Eri = 'ERI',
  /** Western Sahara */
  Esh = 'ESH',
  /** Spain */
  Esp = 'ESP',
  /** Estonia */
  Est = 'EST',
  /** Ethiopia */
  Eth = 'ETH',
  /** Finland */
  Fin = 'FIN',
  /** Fiji */
  Fji = 'FJI',
  /** Falkland Islands (Malvinas) */
  Flk = 'FLK',
  /** France */
  Fra = 'FRA',
  /** Faroe Islands */
  Fro = 'FRO',
  /** Micronesia (Federated States of) */
  Fsm = 'FSM',
  /** Gabon */
  Gab = 'GAB',
  /** United Kingdom of Great Britain and Northern Ireland */
  Gbr = 'GBR',
  /** Georgia */
  Geo = 'GEO',
  /** Guernsey */
  Ggy = 'GGY',
  /** Ghana */
  Gha = 'GHA',
  /** Gibraltar */
  Gib = 'GIB',
  /** Guinea */
  Gin = 'GIN',
  /** Guadeloupe */
  Glp = 'GLP',
  /** Gambia */
  Gmb = 'GMB',
  /** Guinea-Bissau */
  Gnb = 'GNB',
  /** Equatorial Guinea */
  Gnq = 'GNQ',
  /** Greece */
  Grc = 'GRC',
  /** Grenada */
  Grd = 'GRD',
  /** Greenland */
  Grl = 'GRL',
  /** Guatemala */
  Gtm = 'GTM',
  /** French Guiana */
  Guf = 'GUF',
  /** Guam */
  Gum = 'GUM',
  /** Guyana */
  Guy = 'GUY',
  /** Hong Kong */
  Hkg = 'HKG',
  /** Heard Island and McDonald Islands */
  Hmd = 'HMD',
  /** Honduras */
  Hnd = 'HND',
  /** Croatia */
  Hrv = 'HRV',
  /** Haiti */
  Hti = 'HTI',
  /** Hungary */
  Hun = 'HUN',
  /** Indonesia */
  Idn = 'IDN',
  /** Isle of Man */
  Imn = 'IMN',
  /** India */
  Ind = 'IND',
  /** British Indian Ocean Territory */
  Iot = 'IOT',
  /** Ireland */
  Irl = 'IRL',
  /** Iran (Islamic Republic of) */
  Irn = 'IRN',
  /** Iraq */
  Irq = 'IRQ',
  /** Iceland */
  Isl = 'ISL',
  /** Israel */
  Isr = 'ISR',
  /** Italy */
  Ita = 'ITA',
  /** Jamaica */
  Jam = 'JAM',
  /** Jersey */
  Jey = 'JEY',
  /** Jordan */
  Jor = 'JOR',
  /** Japan */
  Jpn = 'JPN',
  /** Kazakhstan */
  Kaz = 'KAZ',
  /** Kenya */
  Ken = 'KEN',
  /** Kyrgyzstan */
  Kgz = 'KGZ',
  /** Cambodia */
  Khm = 'KHM',
  /** Kiribati */
  Kir = 'KIR',
  /** Saint Kitts and Nevis */
  Kna = 'KNA',
  /** Korea (Republic of) */
  Kor = 'KOR',
  /** Kuwait */
  Kwt = 'KWT',
  /** Lao People's Democratic Republic */
  Lao = 'LAO',
  /** Lebanon */
  Lbn = 'LBN',
  /** Liberia */
  Lbr = 'LBR',
  /** Libya */
  Lby = 'LBY',
  /** Saint Lucia */
  Lca = 'LCA',
  /** Liechtenstein */
  Lie = 'LIE',
  /** Sri Lanka */
  Lka = 'LKA',
  /** Lesotho */
  Lso = 'LSO',
  /** Lithuania */
  Ltu = 'LTU',
  /** Luxembourg */
  Lux = 'LUX',
  /** Latvia */
  Lva = 'LVA',
  /** Macao */
  Mac = 'MAC',
  /** Saint Martin (French part) */
  Maf = 'MAF',
  /** Morocco */
  Mar = 'MAR',
  /** Monaco */
  Mco = 'MCO',
  /** Moldova (Republic of) */
  Mda = 'MDA',
  /** Madagascar */
  Mdg = 'MDG',
  /** Maldives */
  Mdv = 'MDV',
  /** Mexico */
  Mex = 'MEX',
  /** Marshall Islands */
  Mhl = 'MHL',
  /** North Macedonia */
  Mkd = 'MKD',
  /** Mali */
  Mli = 'MLI',
  /** Malta */
  Mlt = 'MLT',
  /** Myanmar */
  Mmr = 'MMR',
  /** Montenegro */
  Mne = 'MNE',
  /** Mongolia */
  Mng = 'MNG',
  /** Northern Mariana Islands */
  Mnp = 'MNP',
  /** Mozambique */
  Moz = 'MOZ',
  /** Mauritania */
  Mrt = 'MRT',
  /** Montserrat */
  Msr = 'MSR',
  /** Martinique */
  Mtq = 'MTQ',
  /** Mauritius */
  Mus = 'MUS',
  /** Malawi */
  Mwi = 'MWI',
  /** Malaysia */
  Mys = 'MYS',
  /** Mayotte */
  Myt = 'MYT',
  /** Namibia */
  Nam = 'NAM',
  /** New Caledonia */
  Ncl = 'NCL',
  /** Niger */
  Ner = 'NER',
  /** Norfolk Island */
  Nfk = 'NFK',
  /** Nigeria */
  Nga = 'NGA',
  /** Nicaragua */
  Nic = 'NIC',
  /** Niue */
  Niu = 'NIU',
  /** Netherlands */
  Nld = 'NLD',
  /** Norway */
  Nor = 'NOR',
  /** Nepal */
  Npl = 'NPL',
  /** Nauru */
  Nru = 'NRU',
  /** New Zealand */
  Nzl = 'NZL',
  /** Oman */
  Omn = 'OMN',
  /** Pakistan */
  Pak = 'PAK',
  /** Panama */
  Pan = 'PAN',
  /** Pitcairn */
  Pcn = 'PCN',
  /** Peru */
  Per = 'PER',
  /** Philippines */
  Phl = 'PHL',
  /** Palau */
  Plw = 'PLW',
  /** Papua New Guinea */
  Png = 'PNG',
  /** Poland */
  Pol = 'POL',
  /** Puerto Rico */
  Pri = 'PRI',
  /** Korea (Democratic People's Republic of) */
  Prk = 'PRK',
  /** Portugal */
  Prt = 'PRT',
  /** Paraguay */
  Pry = 'PRY',
  /** Palestine, State of */
  Pse = 'PSE',
  /** French Polynesia */
  Pyf = 'PYF',
  /** Qatar */
  Qat = 'QAT',
  /** Réunion */
  Reu = 'REU',
  /** Romania */
  Rou = 'ROU',
  /** Russian Federation */
  Rus = 'RUS',
  /** Rwanda */
  Rwa = 'RWA',
  /** Saudi Arabia */
  Sau = 'SAU',
  /** Sudan */
  Sdn = 'SDN',
  /** Senegal */
  Sen = 'SEN',
  /** Singapore */
  Sgp = 'SGP',
  /** South Georgia and the South Sandwich Islands */
  Sgs = 'SGS',
  /** Saint Helena, Ascension and Tristan da Cunha */
  Shn = 'SHN',
  /** Svalbard and Jan Mayen */
  Sjm = 'SJM',
  /** Solomon Islands */
  Slb = 'SLB',
  /** Sierra Leone */
  Sle = 'SLE',
  /** El Salvador */
  Slv = 'SLV',
  /** San Marino */
  Smr = 'SMR',
  /** Somalia */
  Som = 'SOM',
  /** Saint Pierre and Miquelon */
  Spm = 'SPM',
  /** Serbia */
  Srb = 'SRB',
  /** South Sudan */
  Ssd = 'SSD',
  /** Sao Tome and Principe */
  Stp = 'STP',
  /** Suriname */
  Sur = 'SUR',
  /** Slovakia */
  Svk = 'SVK',
  /** Slovenia */
  Svn = 'SVN',
  /** Sweden */
  Swe = 'SWE',
  /** Eswatini */
  Swz = 'SWZ',
  /** Sint Maarten (Dutch part) */
  Sxm = 'SXM',
  /** Seychelles */
  Syc = 'SYC',
  /** Syrian Arab Republic */
  Syr = 'SYR',
  /** Turks and Caicos Islands */
  Tca = 'TCA',
  /** Chad */
  Tcd = 'TCD',
  /** Togo */
  Tgo = 'TGO',
  /** Thailand */
  Tha = 'THA',
  /** Tajikistan */
  Tjk = 'TJK',
  /** Tokelau */
  Tkl = 'TKL',
  /** Turkmenistan */
  Tkm = 'TKM',
  /** Timor-Leste */
  Tls = 'TLS',
  /** Tonga */
  Ton = 'TON',
  /** Trinidad and Tobago */
  Tto = 'TTO',
  /** Tunisia */
  Tun = 'TUN',
  /** Türkiye */
  Tur = 'TUR',
  /** Tuvalu */
  Tuv = 'TUV',
  /** Taiwan, Province of China */
  Twn = 'TWN',
  /** Tanzania, United Republic of */
  Tza = 'TZA',
  /** Uganda */
  Uga = 'UGA',
  /** Ukraine */
  Ukr = 'UKR',
  /** United States Minor Outlying Islands */
  Umi = 'UMI',
  /** Uruguay */
  Ury = 'URY',
  /** United States of America */
  Usa = 'USA',
  /** Uzbekistan */
  Uzb = 'UZB',
  /** Holy See */
  Vat = 'VAT',
  /** Saint Vincent and the Grenadines */
  Vct = 'VCT',
  /** Venezuela (Bolivarian Republic of) */
  Ven = 'VEN',
  /** Virgin Islands (British) */
  Vgb = 'VGB',
  /** Virgin Islands (U.S.) */
  Vir = 'VIR',
  /** Viet Nam */
  Vnm = 'VNM',
  /** Vanuatu */
  Vut = 'VUT',
  /** Wallis and Futuna */
  Wlf = 'WLF',
  /** Samoa */
  Wsm = 'WSM',
  /** Yemen */
  Yem = 'YEM',
  /** South Africa */
  Zaf = 'ZAF',
  /** Zambia */
  Zmb = 'ZMB',
  /** Zimbabwe */
  Zwe = 'ZWE'
}

/** Represents an Account Balance. */
export type Balance = {
  __typename?: 'Balance';
  /** The timestamp of the Account Balance record. */
  at: Scalars['DateTime']['output'];
  /** The amount of funds accounting for pending Transactions. */
  available?: Maybe<Scalars['Float']['output']>;
  /** The amount of funds based on posted Transactions. */
  current?: Maybe<Scalars['Float']['output']>;
  /** The ID of the Balance. */
  id: Scalars['ID']['output'];
  /** The amount of funds that may be overdraft or spent on credit. */
  limit?: Maybe<Scalars['Float']['output']>;
  /** The source of the Balance data. */
  source: BalanceSource;
};

/** Represents the source of the Balance data. */
export enum BalanceSource {
  /** Initial value from the provider. */
  Initial = 'INITIAL',
  /** Provider response from a triggered **Refresh Balance** call. */
  Refresh = 'REFRESH',
  /** Regular sync with the provider. */
  Sync = 'SYNC'
}

/**
 * A Connection represents the data source for a Profile's accounts and transactions, such as a Plaid **Item** or MX **member**.
 *
 * The easiest way to register connections is with the Quiltt Connector, which handles the configuration for Plaid Link and MX Connect.
 *
 */
export type Connection = {
  __typename?: 'Connection';
  /** A list of Accounts. */
  accounts: Array<Account>;
  /**
   * Specifies whether this Connection is managed by an external system.
   *
   * When a Connection is imported as externally-managed, Quiltt will sync it,
   * but disconnecting it will not revoke access from the upstream provider.
   *
   */
  externallyManaged: Scalars['Boolean']['output'];
  /** The features currently enabled on the Connection. */
  features: Array<ConnectionFeature>;
  /** The ID of the Connection. */
  id: Scalars['ID']['output'];
  /** The Institution of the Connection. */
  institution: Institution;
  /**
   * Custom metadata about the Connection, stored in a 'key-value' format.
   *
   * See the [Custom Metadata](https://quiltt.dev/api/custom-metadata) guide for more information and examples.
   *
   */
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** Whether the Connection is currently established via OAuth. */
  oauth?: Maybe<Scalars['Boolean']['output']>;
  /** Represents the data provider for the Connection. */
  provider: ConnectionProvider;
  /**
   * The Remote Data associated with the Connection.
   *
   * See the [Remote Data guide](https://quiltt.dev/api/remote-data) for more information.
   *
   */
  remoteData?: Maybe<ConnectionRemoteData>;
  /** The status of the Connection. */
  status: ConnectionStatus;
};


/**
 * A Connection represents the data source for a Profile's accounts and transactions, such as a Plaid **Item** or MX **member**.
 *
 * The easiest way to register connections is with the Quiltt Connector, which handles the configuration for Plaid Link and MX Connect.
 *
 */
export type ConnectionAccountsArgs = {
  filter?: InputMaybe<AccountFilter>;
  sort?: InputMaybe<AccountSort>;
};

/** Autogenerated return type of ConnectionCreated. */
export type ConnectionCreatedPayload = {
  __typename?: 'ConnectionCreatedPayload';
  /** The newly created Connection. */
  connection?: Maybe<Connection>;
};

/** Autogenerated input type of ConnectionDisconnect */
export type ConnectionDisconnectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the Connection to be disconnected. */
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of ConnectionDisconnect. */
export type ConnectionDisconnectPayload = {
  __typename?: 'ConnectionDisconnectPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** The Connection to be disconnected. */
  record?: Maybe<Connection>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/**
 * Represents a feature of a Connection.
 *
 */
export enum ConnectionFeature {
  /**
   * Access to Account Balances and Transaction with up to 24 months of history, depending on the provider.
   *
   * Note that MX typically provides 3-4 months of history and accessing 24 months
   * of history is a "premium" feature that incurs a one-time per-Connection fee.
   * You can configure whether Quiltt should attempt to sync full history on the MX
   * Integration page in the Dashboard
   *
   */
  AccountBalancesAndTransactions = 'ACCOUNT_BALANCES_AND_TRANSACTIONS',
  /**
   * The ability to trigger live refreshes of account balances.
   *
   */
  AccountBalanceRefreshes = 'ACCOUNT_BALANCE_REFRESHES',
  /**
   * Access to verified account numbers to support money movement operations.
   *
   * When this feature is provisioned, eligible accounts will be enabled for the
   * [Account Numbers](https://www.quiltt.dev/api-reference/platform#tag/Account-Numbers)
   * and [Processor Tokens](https://www.quiltt.dev/api-reference/platform#tag/Processor-Tokens)
   * endpoints.
   *
   */
  AccountNumbers = 'ACCOUNT_NUMBERS',
  /**
   * Access to account-holder information to validate identity and account ownership.
   *
   * When this feature is provisioned, account-holder information will become available
   * via [Remote Data](https://www.quiltt.dev/api/remote-data).
   *
   */
  AccountOwners = 'ACCOUNT_OWNERS',
  /**
   * Access to historical account statements in PDF format.
   *
   */
  AccountStatements = 'ACCOUNT_STATEMENTS',
  /**
   * Access to account investments holdings and transactions.
   *
   * Note that for some providers like MX, this feature may be provisioned automatically.
   *
   */
  Investments = 'INVESTMENTS',
  /**
   * Access to detailed account liabilities data.
   *
   * Note that for some providers like MX, this feature may be provisioned automatically.
   *
   */
  Liabilities = 'LIABILITIES'
}

/** Options for filtering Connections. */
export type ConnectionFilter = {
  /**
   * Filter by the contents of Connection `metadata`.
   *
   * Examples:
   * - `{ metadata: { hidden: true } }` to only return Connections marked as "hidden" in your metadata
   * - `{ metadata: { internal_id: "cxn_12345" } }` to only return Connections that match your internal ID
   * - `{ metadata: null }` to only return Connections without metadata
   *
   */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  /** Filter Connections by provider. */
  provider?: InputMaybe<Array<ConnectionProvider>>;
  /**
   * Filter Connections by one or more statuses.
   *
   * Examples:
   * - `{ status: SYNCED }` to only return Connections that are successfully synced
   * - `{ status: ERROR_REPAIRABLE }` to only return Connections that need to be reconnected
   * - `{ status: [INITIALIZING SYNCING] }` to only return Connections that are in the process of syncing
   *
   */
  status?: InputMaybe<Array<ConnectionStatus>>;
  /**
   * Filter out Connections by one or more statuses.
   *
   * Examples:
   * - `{ status_not: DISCONNECTED }` to exclude connections that have been disconnected
   * - `{ status_not: [INITIALIZING SYNCING] }` to exclude Connections that are syncing
   *
   */
  status_not?: InputMaybe<Array<ConnectionStatus>>;
};

/** Represents the data provider for the Connection. */
export enum ConnectionProvider {
  /** Disconnected */
  Disconnected = 'DISCONNECTED',
  /** Finicity */
  Finicity = 'FINICITY',
  /** Mock data */
  Mock = 'MOCK'
}

/** Remote data associated with a Connection. */
export type ConnectionRemoteData = {
  __typename?: 'ConnectionRemoteData';
  /** The Finicity remote data associated with the Connection. */
  finicity?: Maybe<ConnectionRemoteDataFinicity>;
  /** The Mock remote data associated with the Connection. */
  mock?: Maybe<ConnectionRemoteDataMock>;
};

/** Connection-level data from Finicity. */
export type ConnectionRemoteDataFinicity = {
  __typename?: 'ConnectionRemoteDataFinicity';
  /** The Connection data from Finicity. */
  connection?: Maybe<ConnectionRemoteDataFinicityConnection>;
};

/** The Connection data from Finicity. */
export type ConnectionRemoteDataFinicityConnection = {
  __typename?: 'ConnectionRemoteDataFinicityConnection';
  /** The record's Finicity ID. */
  id: Scalars['String']['output'];
  /** The response body. */
  response?: Maybe<RemoteDataFinicityConnectionDetails>;
  /** The date and time when the data was fetched. */
  timestamp: Scalars['DateTime']['output'];
};

/** Connection-level data from Mock. */
export type ConnectionRemoteDataMock = {
  __typename?: 'ConnectionRemoteDataMock';
  /** The Connection data from Mock. */
  connection?: Maybe<ConnectionRemoteDataMockConnection>;
};

/** The Connection data from Mock. */
export type ConnectionRemoteDataMockConnection = {
  __typename?: 'ConnectionRemoteDataMockConnection';
  /** The record's Mock ID. */
  id: Scalars['String']['output'];
  /** The response body. */
  response?: Maybe<RemoteDataMockConnection>;
  /** The date and time when the data was fetched. */
  timestamp: Scalars['DateTime']['output'];
};

/** Autogenerated input type of ConnectionSimulateError */
export type ConnectionSimulateErrorInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the Connection to be put in a repairable state. */
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of ConnectionSimulateError. */
export type ConnectionSimulateErrorPayload = {
  __typename?: 'ConnectionSimulateErrorPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** The Connection put in a repairable state. */
  record?: Maybe<Connection>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Represents the status of a Connection. */
export enum ConnectionStatus {
  /** The Connection has been fully disconnected from all providers and no new data will be synced. */
  Disconnected = 'DISCONNECTED',
  /** The Connection is in the process of being disconnected from its provider. */
  Disconnecting = 'DISCONNECTING',
  /** The Connection provider is reporting an error with the Institution. */
  ErrorInstitution = 'ERROR_INSTITUTION',
  /**
   * The Connection provider is reporting an error with the Connection.
   * Inspect the Connection's [Remote Data](https://quiltt.dev/api/remote-data) for more information.
   */
  ErrorProvider = 'ERROR_PROVIDER',
  /**
   * The Connection must be re-authenticated to resume syncing.
   * Have the user complete the Connector [Reconnect flow](https://quiltt.dev/connector/reconnect) to resolve this error.
   */
  ErrorRepairable = 'ERROR_REPAIRABLE',
  /**
   * Quiltt is experiencing an unexpected error attempting to sync this Connection.
   * Visit our [Status page](https://status.quiltt.io) or contact Quiltt Support for more information.
   */
  ErrorService = 'ERROR_SERVICE',
  /** The Connection is being initialized and will begin syncing soon. */
  Initializing = 'INITIALIZING',
  /** The Connection is synced and up to date with the provider. */
  Synced = 'SYNCED',
  /** The Connection is currently syncing with the provider. */
  Syncing = 'SYNCING',
  /** The Connection is attempting to add new features. */
  Upgrading = 'UPGRADING'
}

/** Autogenerated return type of ConnectionSynced. */
export type ConnectionSyncedPayload = {
  __typename?: 'ConnectionSyncedPayload';
  /** The synced Connection */
  connection?: Maybe<Connection>;
};

/** Autogenerated input type of ConnectionUpdate */
export type ConnectionUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the Connection to be updated. */
  id: Scalars['ID']['input'];
  /** Customizable metadata. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

/** Autogenerated return type of ConnectionUpdate. */
export type ConnectionUpdatePayload = {
  __typename?: 'ConnectionUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** The updated Connection. */
  record?: Maybe<Connection>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Autogenerated return type of ConnectionUpdated. */
export type ConnectionUpdatedPayload = {
  __typename?: 'ConnectionUpdatedPayload';
  /** The updated Connection */
  connection?: Maybe<Connection>;
};

/** Autogenerated input type of ConnectorFinicityClose */
export type ConnectorFinicityCloseInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `token` from the `connectorFinicityInitialize` response. */
  token: Scalars['String']['input'];
};

/** Autogenerated return type of ConnectorFinicityClose. */
export type ConnectorFinicityClosePayload = {
  __typename?: 'ConnectorFinicityClosePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** The Connection. */
  record?: Maybe<Connection>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Autogenerated input type of ConnectorFinicityInitialize */
export type ConnectorFinicityInitializeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**
   * The ID of the Connection to be updated.
   *
   */
  connectionId?: InputMaybe<Scalars['ID']['input']>;
  /** The Connection features to be attempted to be enabled. */
  featuresOptional?: InputMaybe<Array<ConnectionFeature>>;
  /** The Connection features to be enabled. */
  featuresRequired: Array<ConnectionFeature>;
  /**
   * The ID of the Institution Portals Provider used to create a new Connection.
   *
   */
  portalsProviderId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * The URI to redirect to after an OAuth Handshake
   *
   */
  redirectUri?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of ConnectorFinicityInitialize. */
export type ConnectorFinicityInitializePayload = {
  __typename?: 'ConnectorFinicityInitializePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** Connector payload for a Finicity Connector. */
  record?: Maybe<FinicityConnectorSession>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Autogenerated input type of ConnectorMockClose */
export type ConnectorMockCloseInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `token` from the `connectorMockInitialize` response. */
  token: Scalars['String']['input'];
};

/** Autogenerated return type of ConnectorMockClose. */
export type ConnectorMockClosePayload = {
  __typename?: 'ConnectorMockClosePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** The Connection. */
  record?: Maybe<Connection>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Autogenerated input type of ConnectorMockInitialize */
export type ConnectorMockInitializeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**
   * The ID of the Connection to be updated.
   *
   */
  connectionId?: InputMaybe<Scalars['ID']['input']>;
  /** The Connection features to be attempted to be enabled. */
  featuresOptional?: InputMaybe<Array<ConnectionFeature>>;
  /** The Connection features to be enabled. */
  featuresRequired: Array<ConnectionFeature>;
  /**
   * The ID of the Institution Portals Provider used to create a new Connection.
   *
   */
  portalsProviderId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * The URI to redirect to after an OAuth Handshake
   *
   */
  redirectUri?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of ConnectorMockInitialize. */
export type ConnectorMockInitializePayload = {
  __typename?: 'ConnectorMockInitializePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** Connector payload for a Mock Connector. */
  record?: Maybe<MockConnectorSession>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Represents the next step with initializing a Connector session. */
export enum ConnectorStatus {
  /** Unable to upgrade feature as it is not supported by the Institution. */
  Abort = 'ABORT',
  /** The end-user must interact with the Connection provider. */
  ActionRequired = 'ACTION_REQUIRED',
  /** No end-user interaction is required. */
  Continue = 'CONTINUE',
  /** An asynchronous operation is occurring that may need further end-user interaction. */
  Wait = 'WAIT'
}

/** The actionable status for the attempted upgrade */
export type ConnectorUpgrade = {
  __typename?: 'ConnectorUpgrade';
  /** The actionable status of the Upgrade. */
  status: ConnectorStatus;
};

/** Autogenerated input type of ConnectorUpgrade */
export type ConnectorUpgradeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /**
   * The ID of the Connection to be updated.
   *
   */
  connectionId?: InputMaybe<Scalars['ID']['input']>;
  /** The Connection features to be attempted to be enabled. */
  featuresOptional?: InputMaybe<Array<ConnectionFeature>>;
  /** The Connection features to be enabled. */
  featuresRequired: Array<ConnectionFeature>;
};

/** Autogenerated return type of ConnectorUpgrade. */
export type ConnectorUpgradePayload = {
  __typename?: 'ConnectorUpgradePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** Connector features upgrade statuses. */
  record?: Maybe<ConnectorUpgrade>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Represents a supported ISO-4217 currency code. */
export enum CurrencyCode {
  /** United Arab Emirates Dirham */
  Aed = 'AED',
  /** Afghan Afghani */
  Afn = 'AFN',
  /** Albanian Lek */
  All = 'ALL',
  /** Armenian Dram */
  Amd = 'AMD',
  /** Netherlands Antillean Gulden */
  Ang = 'ANG',
  /** Angolan Kwanza */
  Aoa = 'AOA',
  /** Argentine Peso */
  Ars = 'ARS',
  /** Australian Dollar */
  Aud = 'AUD',
  /** Aruban Florin */
  Awg = 'AWG',
  /** Azerbaijani Manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina Convertible Mark */
  Bam = 'BAM',
  /** Barbadian Dollar */
  Bbd = 'BBD',
  /** Bangladeshi Taka */
  Bdt = 'BDT',
  /** Bulgarian Lev */
  Bgn = 'BGN',
  /** Bahraini Dinar */
  Bhd = 'BHD',
  /** Burundian Franc */
  Bif = 'BIF',
  /** Bermudian Dollar */
  Bmd = 'BMD',
  /** Brunei Dollar */
  Bnd = 'BND',
  /** Bolivian Boliviano */
  Bob = 'BOB',
  /** Brazilian Real */
  Brl = 'BRL',
  /** Bahamian Dollar */
  Bsd = 'BSD',
  /** Bhutanese Ngultrum */
  Btn = 'BTN',
  /** Botswana Pula */
  Bwp = 'BWP',
  /** Belarusian Ruble */
  Byn = 'BYN',
  /** Belarusian Ruble */
  Byr = 'BYR',
  /** Belize Dollar */
  Bzd = 'BZD',
  /** Canadian Dollar */
  Cad = 'CAD',
  /** Congolese Franc */
  Cdf = 'CDF',
  /** Swiss Franc */
  Chf = 'CHF',
  /** Unidad de Fomento */
  Clf = 'CLF',
  /** Chilean Peso */
  Clp = 'CLP',
  /** Chinese Renminbi Yuan */
  Cny = 'CNY',
  /** Colombian Peso */
  Cop = 'COP',
  /** Costa Rican Colón */
  Crc = 'CRC',
  /** Cuban Convertible Peso */
  Cuc = 'CUC',
  /** Cuban Peso */
  Cup = 'CUP',
  /** Cape Verdean Escudo */
  Cve = 'CVE',
  /** Czech Koruna */
  Czk = 'CZK',
  /** Djiboutian Franc */
  Djf = 'DJF',
  /** Danish Krone */
  Dkk = 'DKK',
  /** Dominican Peso */
  Dop = 'DOP',
  /** Algerian Dinar */
  Dzd = 'DZD',
  /** Egyptian Pound */
  Egp = 'EGP',
  /** Eritrean Nakfa */
  Ern = 'ERN',
  /** Ethiopian Birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fijian Dollar */
  Fjd = 'FJD',
  /** Falkland Pound */
  Fkp = 'FKP',
  /** British Pound */
  Gbp = 'GBP',
  /** Georgian Lari */
  Gel = 'GEL',
  /** Ghanaian Cedi */
  Ghs = 'GHS',
  /** Gibraltar Pound */
  Gip = 'GIP',
  /** Gambian Dalasi */
  Gmd = 'GMD',
  /** Guinean Franc */
  Gnf = 'GNF',
  /** Guatemalan Quetzal */
  Gtq = 'GTQ',
  /** Guyanese Dollar */
  Gyd = 'GYD',
  /** Hong Kong Dollar */
  Hkd = 'HKD',
  /** Honduran Lempira */
  Hnl = 'HNL',
  /** Haitian Gourde */
  Htg = 'HTG',
  /** Hungarian Forint */
  Huf = 'HUF',
  /** Indonesian Rupiah */
  Idr = 'IDR',
  /** Israeli New Sheqel */
  Ils = 'ILS',
  /** Indian Rupee */
  Inr = 'INR',
  /** Iraqi Dinar */
  Iqd = 'IQD',
  /** Iranian Rial */
  Irr = 'IRR',
  /** Icelandic Króna */
  Isk = 'ISK',
  /** Jamaican Dollar */
  Jmd = 'JMD',
  /** Jordanian Dinar */
  Jod = 'JOD',
  /** Japanese Yen */
  Jpy = 'JPY',
  /** Kenyan Shilling */
  Kes = 'KES',
  /** Kyrgyzstani Som */
  Kgs = 'KGS',
  /** Cambodian Riel */
  Khr = 'KHR',
  /** Comorian Franc */
  Kmf = 'KMF',
  /** North Korean Won */
  Kpw = 'KPW',
  /** South Korean Won */
  Krw = 'KRW',
  /** Kuwaiti Dinar */
  Kwd = 'KWD',
  /** Cayman Islands Dollar */
  Kyd = 'KYD',
  /** Kazakhstani Tenge */
  Kzt = 'KZT',
  /** Lao Kip */
  Lak = 'LAK',
  /** Lebanese Pound */
  Lbp = 'LBP',
  /** Sri Lankan Rupee */
  Lkr = 'LKR',
  /** Liberian Dollar */
  Lrd = 'LRD',
  /** Lesotho Loti */
  Lsl = 'LSL',
  /** Libyan Dinar */
  Lyd = 'LYD',
  /** Moroccan Dirham */
  Mad = 'MAD',
  /** Moldovan Leu */
  Mdl = 'MDL',
  /** Malagasy Ariary */
  Mga = 'MGA',
  /** Macedonian Denar */
  Mkd = 'MKD',
  /** Myanmar Kyat */
  Mmk = 'MMK',
  /** Mongolian Tögrög */
  Mnt = 'MNT',
  /** Macanese Pataca */
  Mop = 'MOP',
  /** Mauritanian Ouguiya */
  Mru = 'MRU',
  /** Mauritian Rupee */
  Mur = 'MUR',
  /** Maldivian Rufiyaa */
  Mvr = 'MVR',
  /** Malawian Kwacha */
  Mwk = 'MWK',
  /** Mexican Peso */
  Mxn = 'MXN',
  /** Malaysian Ringgit */
  Myr = 'MYR',
  /** Mozambican Metical */
  Mzn = 'MZN',
  /** Namibian Dollar */
  Nad = 'NAD',
  /** Nigerian Naira */
  Ngn = 'NGN',
  /** Nicaraguan Córdoba */
  Nio = 'NIO',
  /** Norwegian Krone */
  Nok = 'NOK',
  /** Nepalese Rupee */
  Npr = 'NPR',
  /** New Zealand Dollar */
  Nzd = 'NZD',
  /** Omani Rial */
  Omr = 'OMR',
  /** Panamanian Balboa */
  Pab = 'PAB',
  /** Peruvian Sol */
  Pen = 'PEN',
  /** Papua New Guinean Kina */
  Pgk = 'PGK',
  /** Philippine Peso */
  Php = 'PHP',
  /** Pakistani Rupee */
  Pkr = 'PKR',
  /** Polish Złoty */
  Pln = 'PLN',
  /** Paraguayan Guaraní */
  Pyg = 'PYG',
  /** Qatari Riyal */
  Qar = 'QAR',
  /** Romanian Leu */
  Ron = 'RON',
  /** Serbian Dinar */
  Rsd = 'RSD',
  /** Russian Ruble */
  Rub = 'RUB',
  /** Rwandan Franc */
  Rwf = 'RWF',
  /** Saudi Riyal */
  Sar = 'SAR',
  /** Solomon Islands Dollar */
  Sbd = 'SBD',
  /** Seychellois Rupee */
  Scr = 'SCR',
  /** Sudanese Pound */
  Sdg = 'SDG',
  /** Swedish Krona */
  Sek = 'SEK',
  /** Singapore Dollar */
  Sgd = 'SGD',
  /** Saint Helenian Pound */
  Shp = 'SHP',
  /** Slovak Koruna */
  Skk = 'SKK',
  /** New Leone */
  Sle = 'SLE',
  /** Sierra Leonean Leone */
  Sll = 'SLL',
  /** Somali Shilling */
  Sos = 'SOS',
  /** Surinamese Dollar */
  Srd = 'SRD',
  /** South Sudanese Pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe Dobra */
  Std = 'STD',
  /** São Tomé and Príncipe Second Dobra */
  Stn = 'STN',
  /** Salvadoran Colón */
  Svc = 'SVC',
  /** Syrian Pound */
  Syp = 'SYP',
  /** Swazi Lilangeni */
  Szl = 'SZL',
  /** Thai Baht */
  Thb = 'THB',
  /** Tajikistani Somoni */
  Tjs = 'TJS',
  /** Turkmenistani Manat */
  Tmt = 'TMT',
  /** Tunisian Dinar */
  Tnd = 'TND',
  /** Tongan Paʻanga */
  Top = 'TOP',
  /** Turkish Lira */
  Try = 'TRY',
  /** Trinidad and Tobago Dollar */
  Ttd = 'TTD',
  /** New Taiwan Dollar */
  Twd = 'TWD',
  /** Tanzanian Shilling */
  Tzs = 'TZS',
  /** Ukrainian Hryvnia */
  Uah = 'UAH',
  /** Ugandan Shilling */
  Ugx = 'UGX',
  /** United States Dollar */
  Usd = 'USD',
  /** Uruguayan Peso */
  Uyu = 'UYU',
  /** Uzbekistan Som */
  Uzs = 'UZS',
  /** Venezuelan Bolívar Soberano */
  Ves = 'VES',
  /** Vietnamese Đồng */
  Vnd = 'VND',
  /** Vanuatu Vatu */
  Vuv = 'VUV',
  /** Samoan Tala */
  Wst = 'WST',
  /** Central African Cfa Franc */
  Xaf = 'XAF',
  /** Silver (Troy Ounce) */
  Xag = 'XAG',
  /** Gold (Troy Ounce) */
  Xau = 'XAU',
  /** European Composite Unit */
  Xba = 'XBA',
  /** European Monetary Unit */
  Xbb = 'XBB',
  /** European Unit of Account 9 */
  Xbc = 'XBC',
  /** European Unit of Account 17 */
  Xbd = 'XBD',
  /** East Caribbean Dollar */
  Xcd = 'XCD',
  /** Special Drawing Rights */
  Xdr = 'XDR',
  /** West African Cfa Franc */
  Xof = 'XOF',
  /** Palladium */
  Xpd = 'XPD',
  /** Cfp Franc */
  Xpf = 'XPF',
  /** Platinum */
  Xpt = 'XPT',
  /** Codes specifically reserved for testing purposes */
  Xts = 'XTS',
  /** Yemeni Rial */
  Yer = 'YER',
  /** South African Rand */
  Zar = 'ZAR',
  /** Zambian Kwacha */
  Zmk = 'ZMK',
  /** Zambian Kwacha */
  Zmw = 'ZMW',
  /** Zimbabwean Dollar */
  Zwl = 'ZWL'
}

/** Represents a Date Month. */
export type DateMonth = {
  /** The month */
  month: Scalars['String']['input'];
  /** The year */
  year: Scalars['String']['input'];
};

/** Represents a Date Range. */
export type DateRange = {
  /** The end date of the range */
  end: Scalars['Date']['input'];
  /** The start date of the range */
  start: Scalars['Date']['input'];
};

/** The details of an email address */
export type Email = {
  __typename?: 'Email';
  /** The email address */
  address?: Maybe<Scalars['String']['output']>;
};

/** Represents an Error. */
export type Error = {
  __typename?: 'Error';
  /** A description of the error. */
  message?: Maybe<Scalars['String']['output']>;
  /** Which input value this error came from. */
  path?: Maybe<Array<Scalars['String']['output']>>;
};

/** The Connector configuration for the Finicity provider. */
export type FinicityConnectorSession = {
  __typename?: 'FinicityConnectorSession';
  /** A generated Connect URL */
  link?: Maybe<Scalars['String']['output']>;
  /** The status of the Finicity Connector Session. */
  status: ConnectorStatus;
  /** The unique token for the Finicity Connector Session. */
  token?: Maybe<Scalars['String']['output']>;
};

/** Represents an Investment Holding. */
export type Holding = {
  __typename?: 'Holding';
  /** The Account of the Holding. */
  account: Account;
  /** The timestamp of the Holding record. */
  at: Scalars['DateTime']['output'];
  /** The ID of the Holding. */
  id: Scalars['ID']['output'];
  /** The price for the holding */
  price?: Maybe<Scalars['Float']['output']>;
  /** The number of shares being held */
  quantity?: Maybe<Scalars['Float']['output']>;
  /**
   * The Remote Data associated with the Holding.
   *
   * See the [Remote Data guide](https://quiltt.dev/api/remote-data) for more information.
   *
   */
  remoteData?: Maybe<HoldingRemoteData>;
  /** The Security associated with the Investment Holding. */
  security?: Maybe<Security>;
  /** The value of the holding */
  value?: Maybe<Scalars['Float']['output']>;
};

/** The connection type for Holding. */
export type HoldingConnection = {
  __typename?: 'HoldingConnection';
  /** The total number of records. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<HoldingEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Holding>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type HoldingEdge = {
  __typename?: 'HoldingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Holding>;
};

/** Remote data associated with a Investment Holding. */
export type HoldingRemoteData = {
  __typename?: 'HoldingRemoteData';
  /** The Finicity remote data associated with the Investment Holding. */
  finicity?: Maybe<HoldingRemoteDataFinicity>;
};

/** Remote Data from Finicity */
export type HoldingRemoteDataFinicity = {
  __typename?: 'HoldingRemoteDataFinicity';
  /** Finicity's Holding Remote Data */
  holding?: Maybe<HoldingRemoteDataFinicityHolding>;
};

/** The Holding data from Finicity. */
export type HoldingRemoteDataFinicityHolding = {
  __typename?: 'HoldingRemoteDataFinicityHolding';
  /** The record's Finicity ID. */
  id: Scalars['String']['output'];
  /** The response body. */
  response?: Maybe<RemoteDataFinicityCustomerAccountPosition>;
  /** The date and time when the data was fetched. */
  timestamp: Scalars['DateTime']['output'];
};

/** Represents an Image. */
export type Image = {
  __typename?: 'Image';
  /**
   * The source of the Image.
   * @deprecated This field will be removed in the next version of the API
   */
  _sourcename: ImageSource;
  /** The URL for the Image. */
  url?: Maybe<Scalars['URL']['output']>;
};

/** Represents the data provider for the Image. */
export enum ImageSource {
  /** Finicity */
  Finicity = 'FINICITY',
  /** Mock data */
  Mock = 'MOCK',
  /** Quiltt */
  Quiltt = 'QUILTT'
}

/** Represents an Institution. */
export type Institution = {
  __typename?: 'Institution';
  /** The ID of the Institution. */
  id: Scalars['ID']['output'];
  /** A single Transaction Logo. */
  logo?: Maybe<Image>;
  /** The name of the Institution. */
  name: Scalars['String']['output'];
};


/** Represents an Institution. */
export type InstitutionLogoArgs = {
  source?: InputMaybe<ImageSource>;
};

/** A Merchant represents the accounting of a merchant relationship. */
export type Merchant = {
  __typename?: 'Merchant';
  /** The ID of the Merchant. */
  id: Scalars['ID']['output'];
  /**
   * Custom metadata about the Merchant, stored in a 'key-value' format.
   *
   * See the [Custom Metadata](https://quiltt.dev/api/custom-metadata) guide for more information and examples.
   *
   */
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** The Name of the Account */
  name: Scalars['String']['output'];
  /** The State of the Account */
  state: AccountState;
  /** The date of the earliest known Transaction. */
  transactedFirstOn?: Maybe<Scalars['Date']['output']>;
  /** The date of the most recent known Transaction. */
  transactedLastOn?: Maybe<Scalars['Date']['output']>;
  /** A paginated list of Transactions. */
  transactions: TransactionConnection;
};


/** A Merchant represents the accounting of a merchant relationship. */
export type MerchantTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<TransactionSort>;
};

/** The Connector configuration for the Mock provider. */
export type MockConnectorSession = {
  __typename?: 'MockConnectorSession';
  /** The status of the Mock Connector Session. */
  status: ConnectorStatus;
  /** The unique token for the Mock Connector Session. */
  token?: Maybe<Scalars['String']['output']>;
  /** OAuth Flow URL. */
  url?: Maybe<Scalars['URL']['output']>;
};

/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Update an Account's [metadata](https://quiltt.dev/api/custom-metadata).
   *
   * See the [Accounts guide](https://www.quiltt.dev/api/core-resources/accounts#the-accountupdate-mutation) for more information and examples.
   *
   */
  accountUpdate?: Maybe<AccountUpdatePayload>;
  /**
   * Enqueue a Connection to be disconnected. This will begin the process of disconnecting the Connection from the upstream provider and change the Connection's status. to `DISCONNECTED`.
   *
   * See the [Connections guide](https://www.quiltt.dev/api/core-resources/connections#the-connectiondisconnect-mutation) for more information and examples.
   *
   */
  connectionDisconnect?: Maybe<ConnectionDisconnectPayload>;
  /**
   * Put an active Connection into a user-repairable error state. This allows you to simulate repairing
   * Connection errors by passing the Connection ID to the Quiltt Connector. Note that this mutation is not available in `PRODUCTION` environments.
   *
   * See the [Reconnect guide](https://www.quiltt.dev/connector/reconnect) for more information and examples.
   *
   */
  connectionSimulateError?: Maybe<ConnectionSimulateErrorPayload>;
  /**
   * Update a Connection's [metadata](https://quiltt.dev/api/custom-metadata).
   *
   * See the [Connections guide](https://www.quiltt.dev/api/core-resources/connections#the-connectionupdate-mutation) for more information and examples.
   *
   * Note that updating a Connection's features requires the end-user going through the Connector [Reconnect flow](https://www.quiltt.dev/connector/reconnect).
   *
   */
  connectionUpdate?: Maybe<ConnectionUpdatePayload>;
  /** Create or update a Finicity-sourced Connection from a successful Finicity Connector submission. */
  connectorFinicityClose?: Maybe<ConnectorFinicityClosePayload>;
  /** Generate a Finicity Connector token. */
  connectorFinicityInitialize?: Maybe<ConnectorFinicityInitializePayload>;
  /** Create or update a Mock-sourced Connection from a successful Mock Connector submission. */
  connectorMockClose?: Maybe<ConnectorMockClosePayload>;
  /** Generate a Mock Connector token. */
  connectorMockInitialize?: Maybe<ConnectorMockInitializePayload>;
  /** Attempt to upgrade a Connection. */
  connectorUpgrade?: Maybe<ConnectorUpgradePayload>;
  /**
   * Update a Merchant's metadata.
   * @deprecated This feature is in alpha
   */
  merchantUpdate?: Maybe<AccountMerchantUpdatePayload>;
  /**
   * Update Profile information like the name, email or [metadata](https://quiltt.dev/api/custom-metadata).
   *
   * See the [Profiles guide](https://www.quiltt.dev/api/core-resources/profiles#the-profileupdate-mutation) for more information and examples.
   *
   */
  profileUpdate?: Maybe<ProfileUpdatePayload>;
  /** Update a transaction's metadata. */
  transactionUpdate?: Maybe<TransactionUpdatePayload>;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationAccountUpdateArgs = {
  input: AccountUpdateInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectionDisconnectArgs = {
  input: ConnectionDisconnectInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectionSimulateErrorArgs = {
  input: ConnectionSimulateErrorInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectionUpdateArgs = {
  input: ConnectionUpdateInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectorFinicityCloseArgs = {
  input: ConnectorFinicityCloseInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectorFinicityInitializeArgs = {
  input: ConnectorFinicityInitializeInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectorMockCloseArgs = {
  input: ConnectorMockCloseInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectorMockInitializeArgs = {
  input: ConnectorMockInitializeInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationConnectorUpgradeArgs = {
  input: ConnectorUpgradeInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationMerchantUpdateArgs = {
  input: AccountMerchantUpdateInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationProfileUpdateArgs = {
  input: ProfileUpdateInput;
};


/** The top-level Mutation type. Mutations are used to make requests that create or modify data. */
export type MutationTransactionUpdateArgs = {
  input: TransactionUpdateInput;
};

/** The details of a name */
export type Name = {
  __typename?: 'Name';
  /** The first name */
  first?: Maybe<Scalars['String']['output']>;
  /** The full name */
  full?: Maybe<Scalars['String']['output']>;
  /** The last name */
  last?: Maybe<Scalars['String']['output']>;
  /** The middle name */
  middle?: Maybe<Scalars['String']['output']>;
  /** The prefix */
  prefix?: Maybe<Scalars['String']['output']>;
  /** The suffix */
  suffix?: Maybe<Scalars['String']['output']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The details of a phone number */
export type Phone = {
  __typename?: 'Phone';
  /** The phone number */
  number?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated return type of Ping. */
export type PingPayload = {
  __typename?: 'PingPayload';
  /** Time */
  timestamp?: Maybe<Scalars['String']['output']>;
};

/** A Profile represents an entity with data in a Quiltt Environment, typically a physical person or company end-user of your application. */
export type Profile = {
  __typename?: 'Profile';
  /** The legal address associated with the Profile. */
  address?: Maybe<ProfileAddress>;
  /** A physical person's date of birth. */
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  /**
   * The email associated with the Profile.
   *
   * This field can be used to power passwordless authentication in the Connector.
   *
   */
  email?: Maybe<Scalars['String']['output']>;
  /** The ID of the Profile. */
  id: Scalars['ID']['output'];
  /**
   * Custom metadata about the Profile, stored in a 'key-value' format.
   *
   * See the [Custom Metadata](https://quiltt.dev/api/custom-metadata) guide for more information and examples.
   *
   */
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** A common name or nickname for the Profile. */
  name?: Maybe<Scalars['String']['output']>;
  /** A physical person's legal name. */
  names?: Maybe<ProfileName>;
  /**
   * The phone number associated with the Profile, in E164 Format.
   *
   * This field can be used to power passwordless authentication in the Connector.
   *
   */
  phone?: Maybe<Scalars['String']['output']>;
  /** The UUID of the Profile. */
  uuid: Scalars['ID']['output'];
};

/** The legal address associated with the Profile. */
export type ProfileAddress = {
  __typename?: 'ProfileAddress';
  /** The city. */
  city?: Maybe<Scalars['String']['output']>;
  /** ISO 3166-1 alpha-3 country code. */
  countryCode?: Maybe<AddressCountryCode>;
  /** The first line of the address. */
  line1?: Maybe<Scalars['String']['output']>;
  /** The second line of the address. */
  line2?: Maybe<Scalars['String']['output']>;
  /** The postal code or zip code. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The state or province. */
  state?: Maybe<Scalars['String']['output']>;
};

/** Attributes for setting an address. */
export type ProfileAddressInput = {
  /** The city. */
  city: Scalars['String']['input'];
  /** The country code. */
  countryCode: AddressCountryCode;
  /** The first line of the address. */
  line1: Scalars['String']['input'];
  /** The second line of the address. */
  line2?: InputMaybe<Scalars['String']['input']>;
  /** The postal code. */
  postalCode: Scalars['String']['input'];
  /** The state. */
  state: Scalars['String']['input'];
};

/** A physical person's legal name. */
export type ProfileName = {
  __typename?: 'ProfileName';
  /** The legal given name. */
  first?: Maybe<Scalars['String']['output']>;
  /** The full legal name, comprised from the given name and surname. */
  full?: Maybe<Scalars['String']['output']>;
  /** The legal surname. */
  last?: Maybe<Scalars['String']['output']>;
};

/** Attributes for setting a legal name. */
export type ProfileNameInput = {
  /** The legal given name. */
  first: Scalars['String']['input'];
  /** The legal surname. */
  last: Scalars['String']['input'];
};

/** Autogenerated input type of ProfileUpdate */
export type ProfileUpdateInput = {
  /** Mailing address. */
  address?: InputMaybe<ProfileAddressInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Birthday. */
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  /** Email. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Customizable metadata. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  /** Common or nickname. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Legal name. */
  names?: InputMaybe<ProfileNameInput>;
  /** Cellphone in E164 Format. */
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of ProfileUpdate. */
export type ProfileUpdatePayload = {
  __typename?: 'ProfileUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** Updated Profile. */
  record?: Maybe<Profile>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The top-level Query type. Queries are used to fetch data. */
export type Query = {
  __typename?: 'Query';
  /**
   * Look up an Account by its ID.
   *
   * See the [Accounts guide](https://www.quiltt.dev/api/core-resources/accounts#the-account-query) for more information and examples.
   *
   */
  account?: Maybe<Account>;
  /**
   * Get a list of Accounts. You can apply filters, search and sort to refine the list.
   *
   * See the [Accounts guide](https://www.quiltt.dev/api/core-resources/accounts#the-accounts-query) for more information and examples.
   *
   */
  accounts?: Maybe<Array<Account>>;
  /**
   * Look up a Connection by its ID.
   *
   * See the [Connections guide](https://www.quiltt.dev/api/core-resources/connections#the-connection-query) for more information and examples.
   *
   */
  connection?: Maybe<Connection>;
  /**
   * Get a list of Connections. You can apply filters to refine the list.
   *
   * See the [Connections guide](https://www.quiltt.dev/api/core-resources/connections#the-connections-query) for more information and examples.
   *
   */
  connections?: Maybe<Array<Connection>>;
  /** Look up a Holding by its ID. */
  holding?: Maybe<Holding>;
  /**
   * Get a paginated list of up to 100 Holdings.
   *
   */
  holdings: HoldingConnection;
  /**
   * Look up a Merchant by its ID.
   * @deprecated This feature is in alpha
   */
  merchant?: Maybe<Merchant>;
  /**
   * Get a list of Merchants.
   *
   * You can apply filters, search and sort to refine the list.
   *
   * @deprecated This feature is in alpha
   */
  merchants?: Maybe<Array<Merchant>>;
  /** Access information about the authenticated Profile. */
  profile: Profile;
  /** Look up a Statement by its ID. */
  statement?: Maybe<Statement>;
  /**
   * Get a paginated list of up to 100 Statements.
   *
   */
  statements: StatementConnection;
  /**
   * Look up a Transaction by its ID.
   *
   * See the [Transactions guide](https://www.quiltt.dev/api/core-resources/transactions#the-transaction-query) for more information and examples.
   *
   */
  transaction?: Maybe<Transaction>;
  /**
   * Get a paginated list of up to 100 Transactions. You can apply filters, search and sort to refine the list.
   *
   * See the [Transactions guide](https://www.quiltt.dev/api/core-resources/transactions#the-transactions-query)
   * and the [Pagination guide](https://www.quiltt.dev/api/graphql/pagination) for more information and examples.
   *
   */
  transactions: TransactionConnection;
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryAccountArgs = {
  id: Scalars['ID']['input'];
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryAccountsArgs = {
  filter?: InputMaybe<AccountFilter>;
  search?: InputMaybe<SearchQuery>;
  sort?: InputMaybe<AccountSort>;
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryConnectionArgs = {
  id: Scalars['ID']['input'];
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryConnectionsArgs = {
  filter?: InputMaybe<ConnectionFilter>;
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryHoldingArgs = {
  id: Scalars['ID']['input'];
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryHoldingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryMerchantArgs = {
  id: Scalars['ID']['input'];
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryMerchantsArgs = {
  filter?: InputMaybe<AccountMerchantFilter>;
  sort?: InputMaybe<AccountSort>;
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryStatementArgs = {
  id: Scalars['ID']['input'];
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryStatementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StatementFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<StatementSort>;
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryTransactionArgs = {
  id: Scalars['ID']['input'];
};


/** The top-level Query type. Queries are used to fetch data. */
export type QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<SearchQuery>;
  sort?: InputMaybe<TransactionSort>;
};

/** Finicity Owner data. */
export type RemoteDataFinicityAccountOwnerDetails = {
  __typename?: 'RemoteDataFinicityAccountOwnerDetails';
  /** List of addresses */
  addresses?: Maybe<Array<RemoteDataFinicityAddresses>>;
  /** List of account owner documentation */
  documentations?: Maybe<Array<RemoteDataFinicityDocumentations>>;
  /** List of emails */
  emails?: Maybe<Array<RemoteDataFinicityEmails>>;
  /** The first name of the account holder */
  firstName?: Maybe<Scalars['String']['output']>;
  /** List of account owner Identity Insights */
  identityInsights?: Maybe<RemoteDataFinicityIdentityInsights>;
  /** The last name of the account holder */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The middle name of the account holder */
  middleName?: Maybe<Scalars['String']['output']>;
  /**
   * The classification of the account holder:
   * * "person / personal / home"
   * * "business"
   * * "other"
   */
  nameClassification?: Maybe<Scalars['String']['output']>;
  /** The confidence score 0 – 1.0 of the name classification. */
  nameClassificationconfidencescore?: Maybe<Scalars['Float']['output']>;
  /** The full name of the account owner. Multiple account owners are returned in one string per the source data from the institution. */
  ownerName?: Maybe<Scalars['String']['output']>;
  /** List of phones */
  phones?: Maybe<Array<RemoteDataFinicityPhones>>;
  /**
   * The type of relationship to the account:
   * * "AUTHORIZED_USER"
   *
   * * "BUSINESS"
   *
   * * "FOR_BENEFIT_OF_PRIMARY"
   *
   * * "FOR_BENEFIT_OF_PRIMARY_JOINT_RESTRICTED"
   *
   * * "FOR_BENEFIT_OF_SECONDARY"
   *
   * * "FOR_BENEFIT_OF_SECONDARY_JOINT_RESTRICTED"
   *
   * * "FOR_BENEFIT_OF_SOLE_OWNER_RESTRICTED"
   *
   * * "POWER_OF_ATTORNEY"
   *
   * * "PRIMARY_JOINT_TENANTS"
   *
   * * "PRIMARY"
   *
   * * "PRIMARY_BORROWER"
   *
   * * "PRIMARY_JOINT"
   *
   * * "SECONDARY"
   *
   * * "SECONDARY_JOINT_TENANTS"
   *
   * * "SECONDARY_BORROWER"
   *
   * * "SECONDARY_JOINT"
   *
   * * "SOLE_OWNER"
   *
   * * "TRUSTEE"
   *
   * * "UNIFORM_TRANSFER_TO_MINOR"
   */
  relationship?: Maybe<Scalars['String']['output']>;
  /** A generational or academic suffix */
  suffix?: Maybe<Scalars['String']['output']>;
};

/** Account owner address */
export type RemoteDataFinicityAddresses = {
  __typename?: 'RemoteDataFinicityAddresses';
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code is Iso3166-1 Alpha-2 code and Alpha 3 standard (max length 3). */
  country?: Maybe<Scalars['String']['output']>;
  /** Address line 1 */
  line1?: Maybe<Scalars['String']['output']>;
  /** Address line 2 */
  line2?: Maybe<Scalars['String']['output']>;
  /** Address line 3 */
  line3?: Maybe<Scalars['String']['output']>;
  /** A street address */
  ownerAddress?: Maybe<Scalars['String']['output']>;
  /** A ZIP code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** State */
  state?: Maybe<Scalars['String']['output']>;
  /**
   * The type of address location:
   * * "Business"
   * * "Home"
   * * "Mailing"
   */
  type?: Maybe<Scalars['String']['output']>;
};

/** Categorization Record */
export type RemoteDataFinicityCategorization = {
  __typename?: 'RemoteDataFinicityCategorization';
  /** Combines the `description` and `memo` data together, removing duplicated information and numbers and special characters */
  bestRepresentation?: Maybe<Scalars['String']['output']>;
  /**
   * The different categories for transactions.
   * * "ATM Fee"
   *
   * * "Advertising"
   *
   * * "Air Travel"
   *
   * * "Alcohol & Bars"
   *
   * * "Allowance"
   *
   * * "Amusement"
   *
   * * "Arts"
   *
   * * "Auto & Transport"
   *
   * * "Auto Insurance"
   *
   * * "Auto Payment"
   *
   * * "Baby Supplies"
   *
   * * "Babysitter & Daycare"
   *
   * * "Bank Fee"
   *
   * * "Bills & Utilities"
   *
   * * "Bonus"
   *
   * * "Books"
   *
   * * "Books & Supplies"
   *
   * * "Business Services"
   *
   * * "Buy"
   *
   * * "Cash & ATM"
   *
   * * "Charity"
   *
   * * "Check"
   *
   * * "Child Support"
   *
   * * "Clothing"
   *
   * * "Coffee Shops"
   *
   * * "Credit Card Payment"
   *
   * * "Dentist"
   *
   * * "Deposit"
   *
   * * "Dividend & Cap Gains"
   *
   * * "Doctor"
   *
   * * "Education"
   *
   * * "Electronics & Software"
   *
   * * "Entertainment"
   *
   * * "Eyecare"
   *
   * * "Fast Food"
   *
   * * "Federal Tax"
   *
   * * "Fees & Charges"
   *
   * * "Finance Charge"
   *
   * * "Financial"
   *
   * * "Financial Advisor"
   *
   * * "Food & Dining"
   *
   * * "Furnishings"
   *
   * * "Gas & Fuel"
   *
   * * "Gift"
   *
   * * "Gifts & Donations"
   *
   * * "Groceries"
   *
   * * "Gym"
   *
   * * "Hair"
   *
   * * "Health & Fitness"
   *
   * * "Health Insurance"
   *
   * * "Hobbies"
   *
   * * "Home"
   *
   * * "Home Improvement"
   *
   * * "Home Insurance"
   *
   * * "Home Phone"
   *
   * * "Home Services"
   *
   * * "Home Supplies"
   *
   * * "Hotel"
   *
   * * "Income"
   *
   * * "Interest Income"
   *
   * * "Internet"
   *
   * * "Investments"
   *
   * * "Kids"
   *
   * * "Kids Activities"
   *
   * * "Late Fee"
   *
   * * "Laundry"
   *
   * * "Lawn & Garden"
   *
   * * "Legal"
   *
   * * "Life Insurance"
   *
   * * "Loan Fees and Charges"
   *
   * * "Loan Insurance"
   *
   * * "Loan Interest"
   *
   * * "Loan Payment"
   *
   * * "Loan Principal"
   *
   * * "Loans"
   *
   * * "Local Tax"
   *
   * * "Low Balance"
   *
   * * "Mobile Phone"
   *
   * * "Mortgage & Rent"
   *
   * * "Movies & DVDs"
   *
   * * "Music"
   *
   * * "Newspapers & Magazines"
   *
   * * "Office Supplies"
   *
   * * "Parking"
   *
   * * "Paycheck"
   *
   * * "Personal Care"
   *
   * * "Pet Food & Supplies"
   *
   * * "Pet Grooming"
   *
   * * "Pets"
   *
   * * "Pharmacy"
   *
   * * "Printing"
   *
   * * "Property Tax"
   *
   * * "Public Transportation"
   *
   * * "Reimbursement"
   *
   * * "Rental Car & Taxi"
   *
   * * "Restaurants"
   *
   * * "Sales Tax"
   *
   * * "Sell"
   *
   * * "Service & Parts"
   *
   * * "Service Fee"
   *
   * * "Shipping"
   *
   * * "Shopping"
   *
   * * "Spa & Massage"
   *
   * * "Sporting Goods"
   *
   * * "Sports"
   *
   * * "State Tax"
   *
   * * "Streaming Services"
   *
   * * "Student Loan"
   *
   * * "Taxes"
   *
   * * "Television"
   *
   * * "Toys"
   *
   * * "Trade Commissions"
   *
   * * "Transfer"
   *
   * * "Transfer for Cash Spending"
   *
   * * "Travel"
   *
   * * "Tuition"
   *
   * * "Uncategorized"
   *
   * * "Utilities"
   *
   * * "Vacation"
   *
   * * "Veterinary"
   *
   * * "Internet / Broadband Charges"
   */
  category?: Maybe<Scalars['String']['output']>;
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code is Iso3166-1 Alpha-2 code and Alpha 3 standard (max length 3). */
  country?: Maybe<Scalars['String']['output']>;
  /** A normalized payee, derived from the transaction's description and memo fields */
  normalizedPayeeName?: Maybe<Scalars['String']['output']>;
  /** A ZIP code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** State */
  state?: Maybe<Scalars['String']['output']>;
};

/** Finicity Connection data. */
export type RemoteDataFinicityConnectionDetails = {
  __typename?: 'RemoteDataFinicityConnectionDetails';
  /** Aggregation Status Code */
  aggregationStatusCode?: Maybe<Scalars['String']['output']>;
  /** Customer Id */
  customerId?: Maybe<Scalars['String']['output']>;
  /** Institution Login In */
  institutionLoginId?: Maybe<Scalars['String']['output']>;
};

/** Finicity Account data. */
export type RemoteDataFinicityCustomerAccount = {
  __typename?: 'RemoteDataFinicityCustomerAccount';
  /**
   * The account number from a financial institution in truncated format:
   *
   *   * Last four digits: "1234"
   *
   *   * Last four digits with suffix: "1234-9"
   *
   *   * Full value for string accounts: "john@gmail.com"
   * example: '1234-9'
   */
  accountNumberDisplay?: Maybe<Scalars['String']['output']>;
  /** A timestamp showing the last aggregation attempt, whether successful or not. This will not be present until you have run your first aggregation for the account. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  aggregationAttemptDate?: Maybe<Scalars['BigInt']['output']>;
  /** The status of the most recent aggregation attempt (see [Aggregation Status Codes](https://developer.mastercard.com/open-banking-us/documentation/products/manage/account-aggregation/#aggregation-status-codes)). Won't be present until you have run your first aggregation for the account. */
  aggregationStatusCode?: Maybe<Scalars['Int']['output']>;
  /** A timestamp showing the last successful aggregation of the account. This will not be present until you have run your first aggregation for the account. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  aggregationSuccessDate?: Maybe<Scalars['BigInt']['output']>;
  /** The cleared balance of the account as of `balanceDate` */
  balance?: Maybe<Scalars['Float']['output']>;
  /** A timestamp showing when the balance was captured. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  balanceDate?: Maybe<Scalars['BigInt']['output']>;
  /** A timestamp showing when the account was added to the system. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  createdDate?: Maybe<Scalars['BigInt']['output']>;
  /** A currency code */
  currency?: Maybe<Scalars['String']['output']>;
  /** A customer ID. See Add Customer API for how to create a customer ID. */
  customerId?: Maybe<Scalars['String']['output']>;
  /** Additional customer account details. Not all data points will return for each account type. You can see the account type that each data point will return for in descriptions. The data point are also subject to availability by the institution. */
  detail?: Maybe<RemoteDataFinicityDetail>;
  /**
   * Display position of the account at the financial institution, "1"
   *     being the top listed account
   */
  displayPosition?: Maybe<Scalars['Int']['output']>;
  /** An account ID */
  id?: Maybe<Scalars['String']['output']>;
  /** The ID of a financial institution */
  institutionId?: Maybe<Scalars['String']['output']>;
  /** An institution login ID (from the account record), represented as a number */
  institutionLoginId?: Maybe<Scalars['BigInt']['output']>;
  /** The date of the latest transaction on the account. This will not be present until you have run your first aggregation for the account. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  lastTransactionDate?: Maybe<Scalars['BigInt']['output']>;
  /** A timestamp showing when the account was last modified to the system. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  lastUpdatedDate?: Maybe<Scalars['BigInt']['output']>;
  /** The market segment of the account. Possible values: personal, business */
  marketSegment?: Maybe<Scalars['String']['output']>;
  /** The account name from the institution */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The account number from the institution
   * @deprecated Deprecated by Finicity
   */
  number?: Maybe<Scalars['String']['output']>;
  /** The date of the oldest transaction in the transactions for the account. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  oldestTransactionDate?: Maybe<Scalars['BigInt']['output']>;
  /** The assigned account ID for the account one level higher in the student loan account hierarchy */
  parentAccount?: Maybe<Scalars['String']['output']>;
  /** Investment holdings */
  position?: Maybe<Array<RemoteDataFinicityPosition>>;
  /** The last 4 digits of the ACH account number */
  realAccountNumberLast4?: Maybe<Scalars['String']['output']>;
  /**
   * "pending" during account discovery, always "active" following
   *   successful account activation
   */
  status?: Maybe<Scalars['String']['output']>;
  /**
   * The list of supported account types.
   * * "checking": Standard checking
   * * "savings": Standard savings
   * * "cd": Certificates of deposit
   * * "moneyMarket": Money Market
   * * "creditCard": Standard credit cards
   * * "lineOfCredit": Home equity, line of credit
   * * "investment": Generic investment (no details)
   * * "investmentTaxDeferred": Generic tax-advantaged investment (no details)
   * * "employeeStockPurchasePlan": ESPP, Employee Stock Ownership Plans (ESOP), Stock Purchase Plans
   * * "ira": Individual Retirement Account (not Rollover or Roth)
   * * "401k": 401K Plan
   * * "roth": Roth IRA, Roth 401K
   * * "403b": 403B Plan
   * * "529plan": 529 Plan (True value is 529)
   * * "rollover": Rollover IRA
   * * "ugma": Uniform Gifts to Minors Act
   * * "utma": Uniform Transfers to Minors Act
   * * "keogh": Keogh Plan
   * * "457plan": 457 Plan (True value is 457)
   * * "401a": 401A Plan
   * * "brokerageAccount": Brokerage Account
   * * "educationSavings": Education Savings Account that is not a 529
   * * "healthSavingsAccount": HSA (Health Savings Accounts)
   * * "pension": Pension
   * * "profitSharingPlan": Profit Sharing Plan
   * * "roth401k": Roth 401K
   * * "sepIRA": Simplified Employee Pension IRA
   * * "simpleIRA": Simple IRA
   * * "thriftSavingsPlan": Thrift Savings Plan
   * * "variableAnnuity": Variable Annuity
   * * "cryptocurrency": Cryptocurrency Wallet, Cryptocurrency Account
   * * "mortgage": Standard Mortgages
   * * "loan": Auto loans, equity loans, other loans
   * * "studentLoan": Student Loan
   * * "studentLoanGroup": Student Loan Group
   * * "studentLoanAccount": Student Loan Account
   */
  type?: Maybe<Scalars['String']['output']>;
};

/** Finicity Holding data. */
export type RemoteDataFinicityCustomerAccountPosition = {
  __typename?: 'RemoteDataFinicityCustomerAccountPosition';
  /** An asset class is a grouping of comparable financial securities. These include equities (stocks), fixed income (bonds), and cash equivalent or money market instruments. (DOMESTICBOND, LARGESTOCK, INTLSTOCK, MONEYMRKT, OTHER) */
  assetClass?: Maybe<Scalars['String']['output']>;
  /** The percent change in value since the previous day */
  changePercent?: Maybe<Scalars['Float']['output']>;
  /** The total cost of acquiring the security */
  costBasis?: Maybe<Scalars['Float']['output']>;
  /** The per share cost of acquiring the security */
  costBasisPerShare?: Maybe<Scalars['Float']['output']>;
  /** Currency rate, ratio of currency to original currency */
  currencyRate?: Maybe<Scalars['Float']['output']>;
  /** The current price of the investment holding */
  currentPrice?: Maybe<Scalars['Float']['output']>;
  /** A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  currentPriceDate?: Maybe<Scalars['BigInt']['output']>;
  /** The value amount change since the previous day */
  dailyChange?: Maybe<Scalars['Float']['output']>;
  /** The description of the holding */
  description?: Maybe<Scalars['String']['output']>;
  /** Financial Institution (FI) defined asset class (COMMON STOCK, COMNEQTY, EQUITY/STOCK, CMA-ISA, CONVERTIBLE PREFERREDS, CORPORATE BONDS, OTHER MONEY FUNDS, ALLOCATION FUNDS, CMA-TAXABLE, FOREIGNEQUITYADRS, COMMONSTOCK, PREFERRED STOCKS, STABLE VALUE, FOREIGN EQUITY ADRS) */
  fiAssetClass?: Maybe<Scalars['String']['output']>;
  /** The type of the holding */
  holdType?: Maybe<Scalars['String']['output']>;
  /** The ID of the investment position */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** The security type for the investment holding */
  invSecurityType?: Maybe<Scalars['String']['output']>;
  /** Market value of an investment position at the time of retrieval */
  marketValue?: Maybe<Scalars['Float']['output']>;
  /** Type of mutual fund, such as open ended */
  mfType?: Maybe<Scalars['String']['output']>;
  /** Expiration date of option */
  optionExpireDate?: Maybe<Scalars['Date']['output']>;
  /** The number of shares per option contract */
  optionSharesPerContract?: Maybe<Scalars['Float']['output']>;
  /** The strike price of the option contract */
  optionStrikePrice?: Maybe<Scalars['Float']['output']>;
  /** The type of option contract (PUT or CALL) */
  optionType?: Maybe<Scalars['String']['output']>;
  /** Fund type assigned by the FI (long or short) */
  posType?: Maybe<Scalars['String']['output']>;
  /** Symbol for the currency that the account is being converted into */
  securityCurrency?: Maybe<Scalars['String']['output']>;
  /** The security ID of the transaction */
  securityId?: Maybe<Scalars['String']['output']>;
  /**
   * The security type. This field is related to the `securityId` field. Possible values:
   * * "CUSIP"
   *
   * * "ISIN"
   *
   * * "SEDOL"
   *
   * * "SICC"
   *
   * * "VALOR"
   *
   * * "WKN"
   */
  securityIdType?: Maybe<Scalars['String']['output']>;
  /** The security name for the investment holding */
  securityName?: Maybe<Scalars['String']['output']>;
  /** Type of security for the investment position */
  securityType?: Maybe<Scalars['String']['output']>;
  /** The status of the holding */
  status?: Maybe<Scalars['String']['output']>;
  /** The subaccount's type, such as cash */
  subAccountType?: Maybe<Scalars['String']['output']>;
  /** The investment position's market ticker symbol */
  symbol?: Maybe<Scalars['String']['output']>;
  /** The current day's gain and loss of the position at the time of aggregation in dollars */
  todayGlDollar?: Maybe<Scalars['Float']['output']>;
  /** The current day's gain and loss of the position at the time of aggregation in percentage */
  todayGlPercent?: Maybe<Scalars['Float']['output']>;
  /** Total gain and loss of the position at the time of aggregation in dollars */
  totalGlDollar?: Maybe<Scalars['Float']['output']>;
  /** Total gain and loss of the position at the time of aggregation in percentage */
  totalGlPercent?: Maybe<Scalars['Float']['output']>;
  /** The transaction type of the holding, such as cash, margin, and more */
  transactionType?: Maybe<Scalars['String']['output']>;
  /** The number of units of the holding */
  units?: Maybe<Scalars['Float']['output']>;
};

/** Additional customer account details. Not all data points will return for each account type. You can see the account type that each data point will return for in descriptions. The data point are also subject to availability by the institution. */
export type RemoteDataFinicityDetail = {
  __typename?: 'RemoteDataFinicityDetail';
  /** (Investment) After-tax amount of total balance */
  afterTaxAmount?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Enrolled in autopay (F/Y) */
  autoPayEnrolled?: Maybe<Scalars['Boolean']['output']>;
  /** (Checking/Savings/CD/MoneyMarket) and (Mortgage/Loan) The available balance (typically the current balance with adjustments for any pending transactions) */
  availableBalanceAmount?: Maybe<Scalars['Float']['output']>;
  /** (Investment) Amount available for cash withdrawal */
  availableCashBalance?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Balloon payment amount */
  balloonAmount?: Maybe<Scalars['Float']['output']>;
  /** (Investment) Money available to buy securities */
  buyPower?: Maybe<Scalars['Float']['output']>;
  /** Cash account allowed indicator (true / false) */
  cashAccountAllowed?: Maybe<Scalars['Boolean']['output']>;
  /** (Credit Card/Line Of Credit) Currently available cash advance */
  cashAdvanceAvailableAmount?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) Balance of current cash advance */
  cashAdvanceBalance?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) Interest rate for cash advances */
  cashAdvanceInterestRate?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) Maximum cash advance amount */
  cashAdvanceMaxAmount?: Maybe<Scalars['Float']['output']>;
  /** (Investment) Cash balance of account */
  cashBalanceAmount?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Collateral on loan */
  collateral?: Maybe<Scalars['String']['output']>;
  /** (Investment) Total year to date contributions */
  contribTotalYtd?: Maybe<Scalars['Float']['output']>;
  /** (Student Loan) The date the loan enters into repayment. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  convertToRepayment?: Maybe<Scalars['BigInt']['output']>;
  /** (Credit Card/Line Of Credit) The available credit (typically the credit limit minus the current balance) */
  creditAvailableAmount?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) The account's credit limit */
  creditMaxAmount?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) and (Investment) Current balance */
  currentBalance?: Maybe<Scalars['Float']['output']>;
  /** (Investment) Current loan balance */
  currentLoanBalance?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Current school */
  currentSchool?: Maybe<Scalars['String']['output']>;
  /** (All Account Types) Most recent date of the following information. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  dateAsOf?: Maybe<Scalars['BigInt']['output']>;
  /** (Student Loan) The number of days past a due date that a payment should have been made */
  daysDelinquent?: Maybe<Scalars['Int']['output']>;
  /** (Mortgage/Loan) Description of loan */
  description?: Maybe<Scalars['String']['output']>;
  /** (Investment) Employer matched contributions */
  empMatchAmount?: Maybe<Scalars['Float']['output']>;
  /** (Investment) Employer pretax contribution amount */
  empPretaxContribAmount?: Maybe<Scalars['Float']['output']>;
  /** (Investment) Employer pretax contribution amount year to date */
  empPretaxContribAmountYtd?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Ending balance */
  endingBalanceAmount?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) The escrow balance */
  escrowBalance?: Maybe<Scalars['Float']['output']>;
  /** (Student Loan) The expected date of the payoff date. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  expectedPayoffDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Student Loan) The total outstanding fees balance */
  feesBalance?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) First mortgage (F/Y) */
  firstMortgage?: Maybe<Scalars['Boolean']['output']>;
  /** (Mortgage/Loan) First payment due date. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  firstPaymentDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Student Loan) The financial institution guarantor of the loan (who will pay the loan amount to the owner if the borrower defaults) */
  guarantor?: Maybe<Scalars['String']['output']>;
  /** (Student Loan) Initial interest rate of loan */
  initialInterestRate?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Original loan amount */
  initialMlAmount?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Original date of loan. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  initialMlDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Student Loan) The total outstanding interest balance */
  interestBalance?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Interest paid since inception of loan (life to date) */
  interestPaidLtd?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Period of interest */
  interestPeriod?: Maybe<Scalars['String']['output']>;
  /** (Checking/Savings/CD/MoneyMarket) Interest earned in prior year */
  interestPriorYtdAmount?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) and (Mortgage/Loan) The account's current interest rate */
  interestRate?: Maybe<Scalars['String']['output']>;
  /** (Mortgage/Loan) Type of interest rate */
  interestRateType?: Maybe<Scalars['String']['output']>;
  /** (Student Loan) The indication of the presence of an interest subsidy (i.e. subsidized) */
  interestSubsidyType?: Maybe<Scalars['String']['output']>;
  /** (Checking/Savings/CD/MoneyMarket) Interest accrued year-to-date */
  interestYtdAmount?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) and (Mortgage/Loan) The amount received in the last payment */
  lastPaymentAmount?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) The date of the last payment. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  lastPaymentDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Mortgage/Loan) Due date of last payment. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  lastPaymentDueDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Mortgage/Loan) Amount towards escrow in last payment */
  lastPaymentEscrowAmount?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Amount of interest in last payment */
  lastPaymentInterestAmount?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Amount of last fee in last payment */
  lastPaymentLastFeeAmount?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Amount of late charge in last payment */
  lastPaymentLateCharge?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Amount towards principal in last payment */
  lastPaymentPrincipalAmount?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) The date of the last payment. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  lastPaymentReceiveDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Mortgage/Loan) Late fee charged */
  lateFeeAmount?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Owner of loan */
  lender?: Maybe<Scalars['String']['output']>;
  /** (Student Loan) The federal unique loan identifying number */
  loanAwardId?: Maybe<Scalars['String']['output']>;
  /** (Mortgage/Loan) Frequency of payments (monthly, etc.) */
  loanPaymentFreq?: Maybe<Scalars['String']['output']>;
  /** (Mortgage/Loan) Type of loan payment */
  loanPaymentType?: Maybe<Scalars['String']['output']>;
  /** (Investment) Interest rate of loan */
  loanRate?: Maybe<Scalars['Float']['output']>;
  /** (Student Loan) The repayment status phase (i.e. In School, Grace, Repayment, Deferment, Forbearance) */
  loanStatus?: Maybe<Scalars['String']['output']>;
  /** (Student Loan) The end date of the current status. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  loanStatusEndDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Student Loan) The start date of the current status. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  loanStatusStartDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Mortgage/Loan) Type of loan term */
  loanTermType?: Maybe<Scalars['String']['output']>;
  /** (Student Loan) Loan fees paid year-to-date */
  loanYtdFeesPaid?: Maybe<Scalars['Float']['output']>;
  /** (Student Loan) Loan interest paid year-to-date */
  loanYtdInterestPaid?: Maybe<Scalars['Float']['output']>;
  /** (Student Loan) Loan principal paid year-to-date */
  loanYtdPrincipalPaid?: Maybe<Scalars['Float']['output']>;
  /** Margin trading indicator (true / false) */
  marginAllowed?: Maybe<Scalars['Boolean']['output']>;
  /** (Investment) Net interest earned after deducting interest paid out */
  marginBalance?: Maybe<Scalars['Float']['output']>;
  /** (Investment) Amount matched */
  matchAmount?: Maybe<Scalars['Float']['output']>;
  /** (Checking/Savings/CD/MoneyMarket) Maturity date of account type. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  maturityDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Investment) amount payable to an investor at maturity */
  maturityValueAmount?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Holder of the mortgage or loan */
  mlHolderName?: Maybe<Scalars['String']['output']>;
  /** (Mortgage/Loan) Minimum payment due */
  nextPayment?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Due date for the next payment. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  nextPaymentDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Mortgage/Loan) Amount of interest in next payment */
  nextPaymentInterestAmount?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Amount towards principal in next payment */
  nextPaymentPrincipalAmount?: Maybe<Scalars['Float']['output']>;
  /** (Checking/Savings/CD/MoneyMarket) Date when account was opened. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  openDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Student Loan) The original interest rate to which the loan was disbursed, in APY */
  originalInterestRate?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Original date of loan maturity. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  originalMaturityDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Mortgage/Loan) Original school */
  originalSchool?: Maybe<Scalars['String']['output']>;
  /** (Investment) Other nonvested amount */
  otherNonvestAmount?: Maybe<Scalars['Float']['output']>;
  /** (Investment) Other vested amount */
  otherVestAmount?: Maybe<Scalars['Float']['output']>;
  /** (Student Loan) The date the borrower graduated or dropped below half-time enrollment in school. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  outOfSchoolDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Student Loan) Owner of the loan */
  owner?: Maybe<Scalars['String']['output']>;
  /** (Credit Card/Line Of Credit) Balance past due */
  pastDueAmount?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) Due date for the next payment. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  paymentDueDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Credit Card/Line Of Credit) and (Mortgage/Loan) Minimum payment due */
  paymentMinAmount?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Number of payments made */
  paymentsMade?: Maybe<Scalars['Int']['output']>;
  /** (Mortgage/Loan) Number of payments remaining before loan is paid off */
  paymentsRemaining?: Maybe<Scalars['Int']['output']>;
  /** (Mortgage/Loan) The amount required to payoff the loan */
  payoffAmount?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Date of final payment. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  payoffAmountDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Checking/Savings/CD/MoneyMarket) Amount deposited in period */
  periodDepositAmount?: Maybe<Scalars['Float']['output']>;
  /** End date of period. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  periodEndDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Checking/Savings/CD/MoneyMarket) Interest accrued during the current period */
  periodInterestAmount?: Maybe<Scalars['Float']['output']>;
  /** (Checking/Savings/CD/MoneyMarket) The APY for the current period interest rate */
  periodInterestRate?: Maybe<Scalars['Float']['output']>;
  /** (Checking/Savings/CD/MoneyMarket) Start date of period. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  periodStartDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Investment) Pre-tax amount of total balance */
  preTaxAmount?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) Prior balance in last statement */
  previousBalance?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) The principal balance */
  principalBalance?: Maybe<Scalars['Float']['output']>;
  /** (Investment) Amount of balance for profit sharing */
  profitSharingAmount?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Projected interest on the loan */
  projectedInterest?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Recurring payment amount */
  recurringPaymentAmount?: Maybe<Scalars['Float']['output']>;
  /** (Student Loan) The number of months still outstanding on a loan */
  remainingTermOfMl?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Type of repayment plan for the student loan */
  repaymentPlan?: Maybe<Scalars['String']['output']>;
  /** (Student Loan) The end date of the current repayment plan. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  repaymentPlanEndDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Student Loan) The start date of the current repayment plan. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  repaymentPlanStartDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Credit Card/Line Of Credit) Earned reward balance */
  rewardEarnedBalance?: Maybe<Scalars['Int']['output']>;
  /** (Investment) Amount of balance rolled over from original account (401k, etc.) */
  rolloverAmount?: Maybe<Scalars['Float']['output']>;
  /** (Investment) Life to date of money rolled over */
  rolloverLtd?: Maybe<Scalars['Float']['output']>;
  /** (Investment) Sum of short balance */
  shortBalance?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) Balance of statement at close */
  statementCloseBalance?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) Credit amount applied in statement period */
  statementCreditAmount?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) End date of statement period. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  statementEndDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Credit Card/Line Of Credit) Finance amount of statement period */
  statementFinanceAmount?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) Purchase amount of statement period */
  statementPurchaseAmount?: Maybe<Scalars['Float']['output']>;
  /** (Credit Card/Line Of Credit) Start date of statement period. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  statementStartDate?: Maybe<Scalars['BigInt']['output']>;
  /** (Mortgage/Loan) Length of loan in months */
  termOfMl?: Maybe<Scalars['String']['output']>;
  /** (Student Loan) The total amount paid */
  totalAmountPaid?: Maybe<Scalars['Float']['output']>;
  /** (Student Loan) The total amount paid towards interest */
  totalInterestPaid?: Maybe<Scalars['Float']['output']>;
  /** (Student Loan) The total amount paid towards the principal balance */
  totalPrincipalPaid?: Maybe<Scalars['Float']['output']>;
  /** (Investment) Vested amount in account */
  vestedBalance?: Maybe<Scalars['Float']['output']>;
  /** (Student Loan) The interest rate of multiple interest rates and balances at the group level, in APY */
  weightedInterestRate?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Insurance paid year-to-date */
  ytdInsurancePaid?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Interest paid year-to-date */
  ytdInterestPaid?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Principal paid year-to-date */
  ytdPrincipalPaid?: Maybe<Scalars['Float']['output']>;
  /** (Mortgage/Loan) Tax paid year-to-date */
  ytdTaxPaid?: Maybe<Scalars['Float']['output']>;
};

/** Account owner documentation */
export type RemoteDataFinicityDocumentations = {
  __typename?: 'RemoteDataFinicityDocumentations';
  /**
   * A federal or state issued identification number in alphanumeric characters.
   * * **United States**:
   *
   *   * Passport: 6-9 digits.
   *
   *   * US Visa: 8 digits.
   *
   *   * Driver's license: 1-19 digits
   * * **Canada**:
   *
   *   * Passport: 8 digits
   *
   *   * Driver: 6-9 digits
   */
  governmentId?: Maybe<Scalars['String']['output']>;
  /**
   * Country specific tax ID associated with the customer.
   * * **United Stated**: Social Security number (SSN) or Taxpayer Identification Number (TIN)
   *
   *   * Format: 123-45-7890
   *
   * * **Canada**: Social Insurance Number (SIM) or Numero d'assurance sociale (NAS)
   *
   *   * Format: 123-456-789
   */
  taxId?: Maybe<Scalars['String']['output']>;
  /** Country code is Iso3166-1 Alpha-2 code and Alpha 3 standard (max length 3). */
  taxIdCountry?: Maybe<Scalars['String']['output']>;
};

/** Account owner email */
export type RemoteDataFinicityEmails = {
  __typename?: 'RemoteDataFinicityEmails';
  /** An email address */
  email?: Maybe<Scalars['String']['output']>;
  /**
   * The account owner's email type.
   *
   * * "Personal"
   *
   * * "Business"
   */
  emailType?: Maybe<Scalars['String']['output']>;
  /** The email is primary. */
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
};

/** List of account owner Identity Insights */
export type RemoteDataFinicityIdentityInsights = {
  __typename?: 'RemoteDataFinicityIdentityInsights';
  /**
   * The match status between the input name and the queried entity.
   * * not-found
   * * match
   * * no-match
   */
  addressToName?: Maybe<Scalars['String']['output']>;
  /**
   * The most granular level to which the address could be validated. Ex. If the address was only valid to the city level (but not to the house level), it would return “valid_to_city”.
   *   * missing_address - An input address was not provided.
   *
   *   * invalid - The input address is not valid.
   *
   *   * valid - The input address is valid.
   *
   *   * valid_to_country - The input address could only be validated to the
   * country level. This means the country of the input address is valid, but the other elements of the input address were unable to be confirmed as valid or invalid.
   *
   *   * valid_to_city - The input address was validated to the city level.
   * This means the country, state, city, and postal code of the input address are valid, but the street, house number, and subpremise of the input address were unable to be confirmed as valid or invalid.
   *
   *   * valid_to_street - The input address was validated to the street
   * level. This means the country, state, city, postal code, and street of the input address are valid, but the house number and subpremise of the input address were unable to be confirmed as valid or invalid.
   *
   *     * valid_to_house_number - The input address was validated to the
   * street and house number level. This means the country, state, city, postal code, street, and house number of the input address are valid, but the subpremise of the input address was unable to be confirmed as valid or invalid.
   *
   *     * valid_to_house_number_missing_apt - The input address was
   * validated to the street and house number level. This means the country, state, city, postal code, street, and house number of the input address are valid, but the subpremise of the input address was missing and thus unable to be confirmed as valid or invalid.
   */
  addressValidityLevel?: Maybe<Scalars['Float']['output']>;
  /** Returns a date that the email domain was created. */
  emailDomainCreationDate?: Maybe<Scalars['String']['output']>;
  /** Count of days since the email was first observed in Ekata's Identity Network. If the email has not been observed before, first_seen_days will be 0. */
  emailFirstSeenDays?: Maybe<Scalars['Float']['output']>;
  /**
   * The match status between the input name and the queried entity.
   * * not found
   * * match
   * * no-match
   */
  emailToName?: Maybe<Scalars['String']['output']>;
  /** Comprehensive network score built on behavioral insights such as velocity, popularity, volatility, and age of an attribute, with a higher score indicating a riskier account sign-up. A number between 0 and 1 rounded to three decimal places. */
  identityNetworkScore?: Maybe<Scalars['Float']['output']>;
  /** Comprehensive identity risk score with a higher score indicating a riskier account sign-up. */
  identityRiskScore?: Maybe<Scalars['Float']['output']>;
  /** The distance (in miles) between the IP address and the physical address. */
  ipAddressDistance?: Maybe<Scalars['Float']['output']>;
  /** The ISO-3166 alpha-2 country code associated with the geolocation of the IP address. */
  ipGeolocationCountryCode?: Maybe<Scalars['String']['output']>;
  /** More granular detail about the IP address location. */
  ipGeolocationSubdivision?: Maybe<Scalars['String']['output']>;
  /** Count of days since the IP address was last observed in Ekata's Identity Network. If the IP address has not been observed before, IpLastSeenDays will be 0. */
  ipLastSeenDays?: Maybe<Scalars['Float']['output']>;
  /** The distance (in miles) between the IP address and the closest physical address associated with the phone number. */
  ipPhoneDistance?: Maybe<Scalars['Float']['output']>;
  /** True if the IP address is considered risky, based on multiple IP data points and velocity calculations. */
  ipRisk?: Maybe<Scalars['Float']['output']>;
  /** Comprehensive risk score associated with an IP address, with a higher score indicating a riskier IP address. A number between 0 and 1 rounded to three decimal places. */
  ipRiskScore?: Maybe<Scalars['Float']['output']>;
  /** True if the email address is valid. */
  isEmailValid?: Maybe<Scalars['Boolean']['output']>;
  /** True if the phone number is valid. */
  isPhoneValid?: Maybe<Scalars['Boolean']['output']>;
  /** The company that provides voice and/or data services for the phone number. Carriers are returned at the MVNO level. */
  phoneCarrier?: Maybe<Scalars['String']['output']>;
  /** The ISO-3166 alpha-2 country code associated with the phone number. */
  phoneCountryCode?: Maybe<Scalars['String']['output']>;
  /** Count of days since the combination of phone and email was first observed in Ekata's Identity Network. If that combination has not been observed before, `phoneEmailFirstSeenDays` will be 0. */
  phoneEmailFirstSeenDays?: Maybe<Scalars['Float']['output']>;
  /** Count of days since the phone was last observed in Ekata's Identity Network. If the phone has not been observed before, `phoneLastSeenDays` will be 0. */
  phoneLastSeenDays?: Maybe<Scalars['Float']['output']>;
  /**
   * The line type of the phone number.
   * * landline - traditional wired phone line.
   * * fixed-voip - VoIP-based fixed line phones.
   * * mobile - wireless phone line.
   * * voicemail - voicemail-only service.
   * * toll-free - callee pays for call.
   * * premium - caller pays a premium for the call-e.g., 976 area code.
   * * non-fixed-voip - Skype, for example * other - anything that does not match the previous categories.
   */
  phoneLineType?: Maybe<Scalars['String']['output']>;
  /**
   * The match status between the input phone and the queried entity.
   * * match - Phone location matches input address line 1, address line 2, city, state, and postal code.
   *
   * * postal-match - Phone location postal code matches input address postal code.
   *
   * * zip4-match - Phone location postal code zip+4 matches input address postal code zip+4.
   *
   * * city-state-match - Phone location city and state matches input address city and state.
   * * metro-match - Phone location is in the same metro area as input address.
   *
   * * country-match - Phone location country matches input address country.
   *
   * * no-match - Phone location does not match input address.
   */
  phoneToAddress?: Maybe<Scalars['String']['output']>;
  /**
   * The match status between the input name and the queried entity.
   *
   * * not-found
   *
   * * match
   *
   * * no-match
   */
  phoneToName?: Maybe<Scalars['String']['output']>;
  warnings?: Maybe<Array<Scalars['String']['output']>>;
};

/** Consumer phone */
export type RemoteDataFinicityPhones = {
  __typename?: 'RemoteDataFinicityPhones';
  /** Country calling code of the phone number as defined by ITU-T E.123 and E.164 international standards (max length 3)". */
  country?: Maybe<Scalars['String']['output']>;
  /** A phone number (max length 15). */
  phone?: Maybe<Scalars['String']['output']>;
  /**
   * The account owner's phone type:
   *
   * * "HOME"
   *
   * * "BUSINESS"
   *
   * * "CELL"
   *
   * * "FAX"
   */
  type?: Maybe<Scalars['String']['output']>;
};

/** Details for investment account holdings */
export type RemoteDataFinicityPosition = {
  __typename?: 'RemoteDataFinicityPosition';
  /** An asset class is a grouping of comparable financial securities. These include equities (stocks), fixed income (bonds), and cash equivalent or money market instruments. (DOMESTICBOND, LARGESTOCK, INTLSTOCK, MONEYMRKT, OTHER) */
  assetClass?: Maybe<Scalars['String']['output']>;
  /** The percent change in value since the previous day */
  changePercent?: Maybe<Scalars['Float']['output']>;
  /** The total cost of acquiring the security */
  costBasis?: Maybe<Scalars['Float']['output']>;
  /** The per share cost of acquiring the security */
  costBasisPerShare?: Maybe<Scalars['Float']['output']>;
  /** Currency rate, ratio of currency to original currency */
  currencyRate?: Maybe<Scalars['Float']['output']>;
  /** The current price of the investment holding */
  currentPrice?: Maybe<Scalars['Float']['output']>;
  /** A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  currentPriceDate?: Maybe<Scalars['BigInt']['output']>;
  /** The value amount change since the previous day */
  dailyChange?: Maybe<Scalars['Float']['output']>;
  /** The description of the holding */
  description?: Maybe<Scalars['String']['output']>;
  /** Financial Institution (FI) defined asset class (COMMON STOCK, COMNEQTY, EQUITY/STOCK, CMA-ISA, CONVERTIBLE PREFERREDS, CORPORATE BONDS, OTHER MONEY FUNDS, ALLOCATION FUNDS, CMA-TAXABLE, FOREIGNEQUITYADRS, COMMONSTOCK, PREFERRED STOCKS, STABLE VALUE, FOREIGN EQUITY ADRS) */
  fiAssetClass?: Maybe<Scalars['String']['output']>;
  /** The type of the holding */
  holdType?: Maybe<Scalars['String']['output']>;
  /** The ID of the investment position */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** The security type for the investment holding */
  invSecurityType?: Maybe<Scalars['String']['output']>;
  /** Market value of an investment position at the time of retrieval */
  marketValue?: Maybe<Scalars['Float']['output']>;
  /** Type of mutual fund, such as open ended */
  mfType?: Maybe<Scalars['String']['output']>;
  /** Expiration date of option */
  optionExpireDate?: Maybe<Scalars['Date']['output']>;
  /** The number of shares per option contract */
  optionSharesPerContract?: Maybe<Scalars['Float']['output']>;
  /** The strike price of the option contract */
  optionStrikePrice?: Maybe<Scalars['Float']['output']>;
  /** The type of option contract (PUT or CALL) */
  optionType?: Maybe<Scalars['String']['output']>;
  /** Fund type assigned by the FI (long or short) */
  posType?: Maybe<Scalars['String']['output']>;
  /** Symbol for the currency that the account is being converted into */
  securityCurrency?: Maybe<Scalars['String']['output']>;
  /** The security ID of the transaction */
  securityId?: Maybe<Scalars['String']['output']>;
  /**
   * The security type. This field is related to the `securityId` field. Possible values:
   * * "CUSIP"
   *
   * * "ISIN"
   *
   * * "SEDOL"
   *
   * * "SICC"
   *
   * * "VALOR"
   *
   * * "WKN"
   */
  securityIdType?: Maybe<Scalars['String']['output']>;
  /** The security name for the investment holding */
  securityName?: Maybe<Scalars['String']['output']>;
  /** Type of security for the investment position */
  securityType?: Maybe<Scalars['String']['output']>;
  /** The status of the holding */
  status?: Maybe<Scalars['String']['output']>;
  /** The subaccount's type, such as cash */
  subAccountType?: Maybe<Scalars['String']['output']>;
  /** The investment position's market ticker symbol */
  symbol?: Maybe<Scalars['String']['output']>;
  /** The current day's gain and loss of the position at the time of aggregation in dollars */
  todayGlDollar?: Maybe<Scalars['Float']['output']>;
  /** The current day's gain and loss of the position at the time of aggregation in percentage */
  todayGlPercent?: Maybe<Scalars['Float']['output']>;
  /** Total gain and loss of the position at the time of aggregation in dollars */
  totalGlDollar?: Maybe<Scalars['Float']['output']>;
  /** Total gain and loss of the position at the time of aggregation in percentage */
  totalGlPercent?: Maybe<Scalars['Float']['output']>;
  /** The transaction type of the holding, such as cash, margin, and more */
  transactionType?: Maybe<Scalars['String']['output']>;
  /** The number of units of the holding */
  units?: Maybe<Scalars['Float']['output']>;
};

/** Finicity Transaction data. */
export type RemoteDataFinicityTransaction = {
  __typename?: 'RemoteDataFinicityTransaction';
  /** An account ID represented as a number */
  accountId?: Maybe<Scalars['BigInt']['output']>;
  /** The total amount of the transaction. Transactions for deposits are positive values, withdrawals and debits are negative values. */
  amount?: Maybe<Scalars['Float']['output']>;
  /** Categorization Record */
  categorization?: Maybe<RemoteDataFinicityCategorization>;
  /** The check number of the transaction */
  checkNum?: Maybe<Scalars['String']['output']>;
  /** Transaction commission */
  commissionAmount?: Maybe<Scalars['Int']['output']>;
  /** A date in Unix epoch time (in seconds). Represents the timestamp of the transaction when it was added to our platform. See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  createdDate?: Maybe<Scalars['BigInt']['output']>;
  /** If the foreign amount value is present then this is the currency code of that foreign amount */
  currencySymbol?: Maybe<Scalars['String']['output']>;
  /** A customer ID represented as a number. See Add Customer API for how to create a customer ID. */
  customerId?: Maybe<Scalars['BigInt']['output']>;
  /** The description value is from the financial institution (FI), often known as the payee. The value "No description provided by institution" is returned when the FI doesn't provide one */
  description?: Maybe<Scalars['String']['output']>;
  /** A date in Unix epoch time (in seconds). Represents the timestamp of the transaction when it became effective on an account by an institution. See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  effectiveDate?: Maybe<Scalars['BigInt']['output']>;
  /** The portion of the transaction allocated to escrow */
  escrowAmount?: Maybe<Scalars['Float']['output']>;
  /** The portion of the overall transaction amount applied to fees */
  feeAmount?: Maybe<Scalars['Float']['output']>;
  /** A date in Unix epoch time (in seconds). Represents the first timestamp of the transaction recorded in the `effectiveDate` field. See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  firstEffectiveDate?: Maybe<Scalars['BigInt']['output']>;
  /** A transaction ID */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Capital gains applied in short, long, or miscellaneous terms for tax purposes */
  incomeType?: Maybe<Scalars['String']['output']>;
  /** The portion of the transaction allocated to interest */
  interestAmount?: Maybe<Scalars['Float']['output']>;
  /**
   * Keywords in the `description` and `memo` fields were used to translate investment transactions into these types.
   *
   * Possible values:
   * * "cancel"
   *
   * * "purchaseToClose"
   *
   * * "purchaseToCover"
   *
   * * "contribution"
   *
   * * "optionExercise"
   *
   * * "optionExpiration"
   *
   * * "fee"
   *
   * * "soldToClose"
   *
   * * "soldToOpen"
   *
   * * "split"
   *
   * * "transfer"
   *
   * * "returnOfCapital"
   *
   * * "income"
   *
   * * "purchased"
   *
   * * "sold"
   *
   * * "dividendReinvest"
   *
   * * "tax"
   *
   * * "dividend"
   *
   * * "reinvestOfIncome"
   *
   * * "interest"
   *
   * * "deposit"
   *
   * * "otherInfo"
   */
  investmentTransactionType?: Maybe<Scalars['String']['output']>;
  /** The institution must provide either a description, a memo, or both. We recommended concatenating the two fields into a single value. */
  memo?: Maybe<Scalars['String']['output']>;
  /** A date in Unix epoch time (in seconds). Represents the timestamp of the transaction expiration date when it became expires on an account by an institution. See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  optionExpireDate?: Maybe<Scalars['BigInt']['output']>;
  /** The strike price of the option contract */
  optionStrikePrice?: Maybe<Scalars['Float']['output']>;
  /** A date in Unix epoch time (in seconds). Represents the timestamp of the transaction when it was posted or cleared by the institution. This value isn't required for student loan transaction data. See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  postedDate?: Maybe<Scalars['BigInt']['output']>;
  /** The portion of the transaction allocated to principal */
  principalAmount?: Maybe<Scalars['Float']['output']>;
  /** The ending balance after the transaction was posted */
  runningBalanceAmount?: Maybe<Scalars['Float']['output']>;
  /** The security ID of the transaction */
  securityId?: Maybe<Scalars['String']['output']>;
  /**
   * The security type. This field is related to the `securityId` field. Possible values:
   * * "CUSIP"
   *
   * * "ISIN"
   *
   * * "SEDOL"
   *
   * * "SICC"
   *
   * * "VALOR"
   *
   * * "WKN"
   */
  securityIdType?: Maybe<Scalars['String']['output']>;
  /** Shares per contract of the underlying stock option */
  sharesPerContract?: Maybe<Scalars['Float']['output']>;
  /** Denominator of the stock split for the transaction */
  splitDenominator?: Maybe<Scalars['Float']['output']>;
  /** Numerator of the stock split for the transaction */
  splitNumerator?: Maybe<Scalars['Float']['output']>;
  /** One of "active", "pending", or "shadow" (see [Transaction Status](https://developer.mastercard.com/open-banking-us/documentation/products/manage/transaction-data/#transaction-status)) */
  status?: Maybe<Scalars['String']['output']>;
  /** The sub account where the funds came from */
  subAccountFund?: Maybe<Scalars['String']['output']>;
  /** The type of sub account the funds came from */
  subaccountSecurityType?: Maybe<Scalars['String']['output']>;
  /** Temporarily hold funds if you overpay or underpay your monthly payment */
  suspenseAmount?: Maybe<Scalars['Float']['output']>;
  /** Taxes applicable to the investment trade */
  taxesAmount?: Maybe<Scalars['Int']['output']>;
  /** Ticker symbol for the investment related to the transaction */
  ticker?: Maybe<Scalars['String']['output']>;
  /** A date in Unix epoch time (in seconds). Represents the timestamp of the transaction when it occurred. See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). */
  transactionDate?: Maybe<Scalars['BigInt']['output']>;
  /**
   * If provided by the institution, the following values may be returned in the field of a record:
   * * "atm"
   *
   * * "cash"
   *
   * * "check"
   *
   * * "credit"
   *
   * * "debit"
   *
   * * "deposit"
   *
   * * "directDebit"
   *
   * * "directDeposit"
   *
   * * "dividend"
   *
   * * "fee"
   *
   * * "interest"
   *
   * * "other"
   *
   * * "payment"
   *
   * * "pointOfSale"
   *
   * * "repeatPayment"
   *
   * * "serviceCharge"
   *
   * * "transfer"
   */
  type?: Maybe<Scalars['String']['output']>;
  /** Share price for the investment unit: stocks, mutual funds, ETFs */
  unitPrice?: Maybe<Scalars['Float']['output']>;
  /** The number of units (individual shares) in the transaction */
  unitQuantity?: Maybe<Scalars['Int']['output']>;
};

/** Mock Account data. */
export type RemoteDataMockAccount = {
  __typename?: 'RemoteDataMockAccount';
  /** Balance */
  balance?: Maybe<Scalars['String']['output']>;
  /** Balance Type */
  balanceSheetClass?: Maybe<Scalars['String']['output']>;
  /** Currency Code */
  currency?: Maybe<Scalars['String']['output']>;
  /** ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Last Four */
  mask?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Type */
  type?: Maybe<Scalars['String']['output']>;
};

/** Address */
export type RemoteDataMockAddress = {
  __typename?: 'RemoteDataMockAddress';
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  /** Country */
  country?: Maybe<Scalars['String']['output']>;
  /** Line 1 */
  line1?: Maybe<Scalars['String']['output']>;
  /** Postal Code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** State */
  region?: Maybe<Scalars['String']['output']>;
};

/** Mock Connection data. */
export type RemoteDataMockConnection = {
  __typename?: 'RemoteDataMockConnection';
  /** ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Institution Name */
  institution?: Maybe<Scalars['String']['output']>;
};

/** Mock Owner data. */
export type RemoteDataMockOwner = {
  __typename?: 'RemoteDataMockOwner';
  /** Address */
  address?: Maybe<RemoteDataMockAddress>;
  /** Email */
  email?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Phone */
  phone?: Maybe<Scalars['String']['output']>;
};

/** Mock Transaction data. */
export type RemoteDataMockTransaction = {
  __typename?: 'RemoteDataMockTransaction';
  /** Account ID */
  accountId?: Maybe<Scalars['String']['output']>;
  /** Amount */
  amount?: Maybe<Scalars['String']['output']>;
  /** Category */
  category?: Maybe<Scalars['String']['output']>;
  /** Date */
  date?: Maybe<Scalars['String']['output']>;
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** ID */
  id?: Maybe<Scalars['String']['output']>;
  /** ISO Currency Code */
  isoCurrencyCode?: Maybe<Scalars['String']['output']>;
  /** Status */
  status?: Maybe<Scalars['String']['output']>;
};

/** Options for searching through a list. */
export type SearchQuery = {
  /** Query for searching. */
  term?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a Security */
export type Security = {
  __typename?: 'Security';
  /** CUSIP ID */
  cusip?: Maybe<Scalars['String']['output']>;
  /** ISIN ID */
  isin?: Maybe<Scalars['String']['output']>;
  /** Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Ticker Symbol */
  tickerSymbol?: Maybe<Scalars['String']['output']>;
};

/** Represents a Statement. */
export type Statement = {
  __typename?: 'Statement';
  /** The Account associated with the Statement. */
  account: Account;
  /** The end date of the Statement period. */
  endOn?: Maybe<Scalars['Date']['output']>;
  /** The ID of the Statement. */
  id: Scalars['ID']['output'];
  /** The start date of the Statement period. */
  startOn?: Maybe<Scalars['Date']['output']>;
  /** The URL of the Statement PDF, with a 1-hour expiration. */
  url: Scalars['URL']['output'];
};

/** The connection type for Statement. */
export type StatementConnection = {
  __typename?: 'StatementConnection';
  /** The total number of records. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StatementEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Statement>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type StatementEdge = {
  __typename?: 'StatementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Statement>;
};

/** Options for filtering Statements. */
export type StatementFilter = {
  /**
   * Filter for Statements by one or more supplied Account IDs.
   *
   * Examples:
   * - `{ accountIds: ["acct_12Hz9Dz7vEAuljYvhmPcvM9"] }` for Statements for a specific account
   *
   */
  accountIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Filter for Statements by overlap with the supplied data range.
   *
   * Examples:
   * - `{ for: { start: "2024-06-01", end: "2024-08-31" } }` for Statements that cover June through August 2024.
   *
   */
  for?: InputMaybe<DateRange>;
  /**
   * Filter for Statements issued on the supplied month.
   *
   * Examples:
   * - `{ issued_for: { year: "2024", month: "8" } }` for Statements that where issued during August 2024.
   *
   */
  issuedFor?: InputMaybe<DateMonth>;
  /**
   * Filter for Statements covered by the supplied date.
   *
   * Examples:
   * - `{ on: "2024-08-15" }` for Statements that cover August 15, 2024.
   *
   */
  on?: InputMaybe<Scalars['Date']['input']>;
};

/** Options for sorting statements. */
export enum StatementSort {
  /** Oldest First, Unknown Periods Last */
  DateAsc = 'DATE_ASC',
  /** Newest First, Unknown Periods First */
  DateDesc = 'DATE_DESC'
}

/** The top-level Subscription type. Subscriptions are used to watch for events emitted from the server. */
export type Subscription = {
  __typename?: 'Subscription';
  /** An Account was verified for money movement. */
  accountVerified: AccountVerifiedPayload;
  /** A Connection was created. */
  connectionCreated: ConnectionCreatedPayload;
  /** A Connection was synced. */
  connectionSynced: ConnectionSyncedPayload;
  /**
   * A Connection was updated.
   * @deprecated Use `connectionSynced`
   */
  connectionUpdated: ConnectionUpdatedPayload;
  /** A Subscription for Debuging, Runs at every minute */
  ping: PingPayload;
};


/** The top-level Subscription type. Subscriptions are used to watch for events emitted from the server. */
export type SubscriptionAccountVerifiedArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
};


/** The top-level Subscription type. Subscriptions are used to watch for events emitted from the server. */
export type SubscriptionConnectionSyncedArgs = {
  connectionId?: InputMaybe<Scalars['ID']['input']>;
};


/** The top-level Subscription type. Subscriptions are used to watch for events emitted from the server. */
export type SubscriptionConnectionUpdatedArgs = {
  connectionId?: InputMaybe<Scalars['ID']['input']>;
};

/** A Transaction represents financial activity associated with an Account. */
export type Transaction = {
  __typename?: 'Transaction';
  /** The Account of the Transaction. */
  account: Account;
  /** The amount. */
  amount: Scalars['Float']['output'];
  /** The ISO-4217 currency code of the Transaction */
  currencyCode: CurrencyCode;
  /** The date. */
  date: Scalars['Date']['output'];
  /** The description or line item name. */
  description: Scalars['String']['output'];
  /** Specifies whether the Transaction is a debit or a credit. */
  entryType: TransactionEntryType;
  /** For Investments: The total amount of all fees applied to this transaction. */
  fees?: Maybe<Scalars['Float']['output']>;
  /** The ID of the Transaction. */
  id: Scalars['ID']['output'];
  /** Represents the classification of an Transaction. */
  kind: AccountKind;
  /** A single Transaction Logo. */
  logo?: Maybe<Image>;
  /**
   * The Merchant associated with the Transaction.
   * @deprecated This feature is in alpha
   */
  merchant?: Maybe<Merchant>;
  /**
   * Custom metadata about the Transaction, stored in a 'key-value' format.
   *
   * See the [Custom Metadata](https://quiltt.dev/api/custom-metadata) guide for more information and examples.
   *
   */
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** For Investments: The price of the security at the time of this transaction. */
  price?: Maybe<Scalars['Float']['output']>;
  /** The original provider of the Transaction. */
  provider?: Maybe<ConnectionProvider>;
  /** For Investments: The quantity of security units involved in this transaction: positive for purchases and negative for sales. */
  quantity?: Maybe<Scalars['Float']['output']>;
  /**
   * The Remote Data associated with the Transaction.
   *
   * See the [Remote Data guide](https://quiltt.dev/api/remote-data) for more information.
   *
   */
  remoteData?: Maybe<TransactionRemoteData>;
  /** The Security associated with the Investment Transaction. */
  security?: Maybe<Security>;
  /** The status of the Transaction. */
  status: TransactionStatus;
};


/** A Transaction represents financial activity associated with an Account. */
export type TransactionLogoArgs = {
  source?: InputMaybe<ImageSource>;
};

/** The connection type for Transaction. */
export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  /** The total number of records. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TransactionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Transaction>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Transaction>;
};

/** Whether the transaction represents a credit or a debit. */
export enum TransactionEntryType {
  /** An entry recording money being advanced into the account. */
  Credit = 'CREDIT',
  /** An entry recording money being withdrawn from the account. */
  Debit = 'DEBIT'
}

/** Options for filtering Transactions. */
export type TransactionFilter = {
  /**
   * Filter Transactions by one or more supplied Account IDs.
   *
   * Examples:
   * - `{ accountIds: ["acct_12Hz9Dz7vEAuljYvhmPcvM9"] }` for Transactions from a specific account
   *
   */
  accountIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The amount of the Transaction */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** Absolute value of the amount of the Transaction */
  amount_abs?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than the absolute value of the amount of the Transaction */
  amount_abs_gt?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than or equal to the absolute value of the amount of the Transaction */
  amount_abs_gte?: InputMaybe<Scalars['Float']['input']>;
  /** Less than the absolute value of the amount of the Transaction */
  amount_abs_lt?: InputMaybe<Scalars['Float']['input']>;
  /** Less than or equal to the absolute value of the amount of the Transaction */
  amount_abs_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than the amount of the Transaction */
  amount_gt?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than or equal to the amount of the Transaction */
  amount_gte?: InputMaybe<Scalars['Float']['input']>;
  /** Less than the amount of the Transaction */
  amount_lt?: InputMaybe<Scalars['Float']['input']>;
  /** Less than or equal to the amount of the Transaction */
  amount_lte?: InputMaybe<Scalars['Float']['input']>;
  /** The date of the Transaction. */
  date?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than the date of the Transaction. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** Greater than or equal to the date of the Transaction. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** Less than the date of the Transaction. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** Less than or equal to the date of the Transaction. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Filter Transactions by debit/credit status.
   *
   * Examples:
   * - `{ entryType: DEBIT }` to only return account outflows
   * - `{ entryType: CREDIT }` to only return account inflows
   *
   */
  entryType?: InputMaybe<TransactionEntryType>;
  /**
   * Filter Transactions by one of more classifications.
   *
   * Examples:
   * - `{ kind: DEPOSITORY }` to only return depository transactions (i.e. checking/savings).
   * - `{ kind: [LOAN, CREDIT] }` to only return loan and credit transactions.
   *
   */
  kind?: InputMaybe<Array<AccountKind>>;
  /**
   * Filter out Transactions by one or more classification.
   *
   * Examples:
   * - `{ kind_not: DEPOSITORY }` to exclude depository transactions (i.e. checking/savings).
   * - `{ kind_not: [LOAN, CREDIT] }` to exclude loan and credit transactions.
   *
   */
  kind_not?: InputMaybe<Array<AccountKind>>;
  /**
   * Filter by the contents of Transaction `metadata`.
   *
   * Examples:
   * - `{ metadata: { hidden: true } }` to only return Transactions marked as "hidden" in your metadata
   * - `{ metadata: { my_category: "Tasty Treats" } }` to only return Transactions that match your categorization system
   * - `{ metadata: null }` to only return Transactions without metadata
   *
   */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Filter Transactions by Transaction status.
   *
   * Examples:
   * - `{ status: POSTED }` to only return posted transactions.
   * - `{ status: PENDING }` to only return pending transactions.
   *
   */
  status?: InputMaybe<Array<TransactionStatus>>;
};

/** Remote data associated with a Transaction. */
export type TransactionRemoteData = {
  __typename?: 'TransactionRemoteData';
  /** The Finicity remote data associated with the Transaction. */
  finicity?: Maybe<TransactionRemoteDataFinicity>;
  /** The Mock remote data associated with the Transaction. */
  mock?: Maybe<TransactionRemoteDataMock>;
};

/** Transaction-level data from Finicity. */
export type TransactionRemoteDataFinicity = {
  __typename?: 'TransactionRemoteDataFinicity';
  /** The Transaction data from Finicity. */
  transaction?: Maybe<TransactionRemoteDataFinicityTransaction>;
};

/** The Transaction data from Finicity. */
export type TransactionRemoteDataFinicityTransaction = {
  __typename?: 'TransactionRemoteDataFinicityTransaction';
  /** The record's Finicity ID. */
  id: Scalars['String']['output'];
  /** The response body. */
  response?: Maybe<RemoteDataFinicityTransaction>;
  /** The date and time when the data was fetched. */
  timestamp: Scalars['DateTime']['output'];
};

/** Transaction-level data from Mock. */
export type TransactionRemoteDataMock = {
  __typename?: 'TransactionRemoteDataMock';
  /** The Transaction data from Mock. */
  transaction?: Maybe<TransactionRemoteDataMockTransaction>;
};

/** The Transaction data from Mock. */
export type TransactionRemoteDataMockTransaction = {
  __typename?: 'TransactionRemoteDataMockTransaction';
  /** The record's Mock ID. */
  id: Scalars['String']['output'];
  /** The response body. */
  response?: Maybe<RemoteDataMockTransaction>;
  /** The date and time when the data was fetched. */
  timestamp: Scalars['DateTime']['output'];
};

/** Options for sorting transactions. */
export enum TransactionSort {
  /** Oldest First, Pending Last */
  DateAsc = 'DATE_ASC',
  /** Newest First, Pending First */
  DateDesc = 'DATE_DESC'
}

/** Represents the status for a Transaction. */
export enum TransactionStatus {
  /** Awaiting decision or settlement, and may be replaced, updated, or removed. */
  Pending = 'PENDING',
  /** Announced or published as conclusive. */
  Posted = 'POSTED',
  /** Estimated or forecast on the basis of current trends or data. */
  Projected = 'PROJECTED'
}

/** Autogenerated input type of TransactionUpdate */
export type TransactionUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the transaction to be updated. */
  id: Scalars['ID']['input'];
  /** Customizable metadata. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

/** Autogenerated return type of TransactionUpdate. */
export type TransactionUpdatePayload = {
  __typename?: 'TransactionUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** List of errors from an unsuccessful mutation. */
  errors?: Maybe<Array<Error>>;
  /** The updated transaction. */
  record?: Maybe<Transaction>;
  /** Specifies whether the mutation was successful. */
  success: Scalars['Boolean']['output'];
};

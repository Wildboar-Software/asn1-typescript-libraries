/* eslint-disable */
import {
    BOOLEAN,
    GeneralizedTime,
    INTEGER,
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";
import { IconObject, _decode_IconObject, _encode_IconObject } from "../RecordSyntax-explain/IconObject.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { DatabaseList, _decode_DatabaseList, _encode_DatabaseList } from "../RecordSyntax-explain/DatabaseList.ta.mjs";
import { DatabaseInfo_recordCount, _decode_DatabaseInfo_recordCount, _encode_DatabaseInfo_recordCount } from "../RecordSyntax-explain/DatabaseInfo-recordCount.ta.mjs";
import { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";
import { ContactInfo, _decode_ContactInfo, _encode_ContactInfo } from "../RecordSyntax-explain/ContactInfo.ta.mjs";
import { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../RecordSyntax-explain/AccessInfo.ta.mjs";


/**
 * @summary DatabaseInfo
 * @description
 * 
 * One database, including restrictions and parameters. One record per database
 * the server supports. Search ExplainCategory `DatabaseInfo` with DatabaseName
 * as the key. Also searchable by Availability `yes`, Supplier, Producer,
 * Proprietary `no`, and UserFee `no` (§3.2.10.1.4), and by Keyword and
 * ExplainDatabase (ATR.1 notes 5 and 6). A record with sub-databases is one
 * logical database; the listed databases remain available on their own.
 * `proprietary` is mandatory in a full record. Element set `B` is brief;
 * `brief-1` is that brief record without the icon. ANSI/NISO Z39.50-2003
 * §3.2.10.1.1, §3.2.10.3.2; REC.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DatabaseInfo ::= SEQUENCE {
 *     -- A server may provide "virtual databases" that are combinations of individual database.
 *     -- These databases are indicated by the presence of subDbs in the combination database's
 *     -- DatabaseDescription.
 *     commonInfo              [0] IMPLICIT CommonInfo OPTIONAL,
 *     -- Key elements follow:
 *     name                    [1] IMPLICIT DatabaseName,
 *     -- Non-key brief elements follow:
 *     explainDatabase         [2] IMPLICIT NULL OPTIONAL,
 *     -- See comment 3
 *     nicknames               [3] IMPLICIT SEQUENCE OF DatabaseName OPTIONAL,
 *     icon                    [4] IMPLICIT IconObject OPTIONAL,
 *     -- Element set name “brief-1' is defined for use when client wants icon to be omitted;
 *     -- otherwise ‘brief-1' is identical to ‘brief’
 *     user-fee                [5] IMPLICIT BOOLEAN,
 *     available               [6] IMPLICIT BOOLEAN,
 *     titleString             [7] IMPLICIT HumanString OPTIONAL,
 *     -- Non-brief elements follow:
 *     keywords                [8] IMPLICIT SEQUENCE OF HumanString OPTIONAL,
 *     description             [9] IMPLICIT HumanString OPTIONAL,
 *     associatedDbs           [10] IMPLICIT DatabaseList OPTIONAL,
 *     -- Databases that may be searched in combination with this one
 *     subDbs                  [11] IMPLICIT DatabaseList OPTIONAL,
 *     -- When present, this database is a composite representing the combined databases 'subDbs'.
 *     -- The individual subDbs are also available
 *     disclaimers             [12] IMPLICIT HumanString OPTIONAL,
 *     news                    [13] IMPLICIT HumanString OPTIONAL,
 *     recordCount             [14] CHOICE {
 *         actualNumber            [0] IMPLICIT INTEGER,
 *         approxNumber            [1] IMPLICIT INTEGER
 *     } OPTIONAL,
 *     defaultOrder            [15] IMPLICIT HumanString OPTIONAL,
 *     avRecordSize            [16] IMPLICIT INTEGER OPTIONAL,
 *     maxRecordSize           [17] IMPLICIT INTEGER OPTIONAL,
 *     hours                   [18] IMPLICIT HumanString OPTIONAL,
 *     bestTime                [19] IMPLICIT HumanString OPTIONAL,
 *     lastUpdate              [20] IMPLICIT GeneralizedTime OPTIONAL,
 *     updateInterval          [21] IMPLICIT IntUnit OPTIONAL,
 *     coverage                [22] IMPLICIT HumanString OPTIONAL,
 *     proprietary             [23] IMPLICIT BOOLEAN OPTIONAL,
 *         -- mandatory in full record
 *     copyrightText           [24] IMPLICIT HumanString OPTIONAL,
 *     copyrightNotice         [25] IMPLICIT HumanString OPTIONAL,
 *     producerContactInfo     [26] IMPLICIT ContactInfo OPTIONAL,
 *     supplierContactInfo     [27] IMPLICIT ContactInfo OPTIONAL,
 *     submissionContactInfo   [28] IMPLICIT ContactInfo OPTIONAL,
 *     -- accessInfo lists items connected with the database.
 *     -- All listed items should be in the server's AccessInfo.
 *     accessInfo              [29] IMPLICIT AccessInfo OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DatabaseInfo {
    /**
     * @summary `commonInfo`.
     * @description
     * Dates, language, and other information about this Explain record.
     * otherInfo is omitted from element set `B`. REC.1 Comment 1.
     * @public
     * @readonly
     */
    readonly commonInfo: OPTIONAL<CommonInfo>;
    /**
     * @summary `name`.
     * @description
     * Brief. Key. The one full database name. Typically a short string, not
     * human-readable, and not varied by language. Search with Use DatabaseName.
     * ANSI/NISO Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly name: DatabaseName;
    /**
     * @summary `explainDatabase`.
     * @description
     * Brief. Present when this database is the Explain database, or an Explain
     * database for a different server, possibly on another host. How to reach
     * that server is outside this standard. One suggested agreement is that the
     * database name is a URL. To search these records, combine ExplainCategory
     * `DatabaseInfo` with ExplainDatabase; the term is NULL in version 3 and
     * otherwise ignored, and Relation is omitted or AlwaysMatches. Comment 3;
     * ATR.1 note 6.
     * @public
     * @readonly
     */
    readonly explainDatabase: OPTIONAL<NULL>;
    /**
     * @summary `nicknames`.
     * @description
     * Brief. Short or alternate names for the database. ANSI/NISO Z39.50-2003
     * §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly nicknames: OPTIONAL<DatabaseName[]>;
    /**
     * @summary `icon`.
     * @description
     * Brief. Icon for this database, in machine-presentable form. Element set
     * `brief-1` is brief with this omitted. ANSI/NISO Z39.50-2003 §3.2.10.3.2;
     * REC.1.
     * @public
     * @readonly
     */
    readonly icon: OPTIONAL<IconObject>;
    /**
     * @summary `user_fee`.
     * @description
     * Brief. Whether access to this database is charged. Search UserFee `no`
     * for databases with no user fee. ANSI/NISO Z39.50-2003 §3.2.10.1.4,
     * §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly user_fee: BOOLEAN;
    /**
     * @summary `available`.
     * @description
     * Brief. Whether the database is currently available. Search Availability
     * `yes` for databases that are. ANSI/NISO Z39.50-2003 §3.2.10.1.4,
     * §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly available: BOOLEAN;
    /**
     * @summary `titleString`.
     * @description
     * Brief. Human-readable title, as opposed to the database name. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly titleString: OPTIONAL<HumanString>;
    /**
     * @summary `keywords`.
     * @description
     * Non-brief. Keywords for the database. Search with Use Keyword, combined
     * with ExplainCategory `DatabaseInfo`, for terms that match one of the
     * query terms. ANSI/NISO Z39.50-2003 §3.2.10.3.2; ATR.1 note 5.
     * @public
     * @readonly
     */
    readonly keywords: OPTIONAL<HumanString[]>;
    /**
     * @summary `description`.
     * @description
     * Non-brief. Human-readable description of the database. Element set
     * `description` returns the brief elements plus this element. ANSI/NISO
     * Z39.50-2003 §3.2.10.2.2, §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;
    /**
     * @summary `associatedDbs`.
     * @description
     * Non-brief. Databases the server allows, and possibly encourages, to be
     * searched together with this one. REC.1; ANSI/NISO Z39.50-2003
     * §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly associatedDbs: OPTIONAL<DatabaseList>;
    /**
     * @summary `subDbs`.
     * @description
     * Non-brief. When present, this database is a composite of these databases.
     * The individual databases are also available. REC.1; ANSI/NISO Z39.50-2003
     * §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly subDbs: OPTIONAL<DatabaseList>;
    /**
     * @summary `disclaimers`.
     * @description
     * Non-brief. Human-readable disclaimers. ANSI/NISO Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly disclaimers: OPTIONAL<HumanString>;
    /**
     * @summary `news`.
     * @description
     * Non-brief. Human-readable news about this database. ANSI/NISO Z39.50-2003
     * §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly news: OPTIONAL<HumanString>;
    /**
     * @summary `recordCount`.
     * @description
     * Non-brief. How many records the database has, either an exact count or an
     * estimate. ANSI/NISO Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly recordCount: OPTIONAL<DatabaseInfo_recordCount>;
    /**
     * @summary `defaultOrder`.
     * @description
     * Non-brief. Human-readable description of the default order in which
     * records are presented. ANSI/NISO Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly defaultOrder: OPTIONAL<HumanString>;
    /**
     * @summary `avRecordSize`.
     * @description
     * Non-brief. Estimated average record size, in bytes. ANSI/NISO Z39.50-2003
     * §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly avRecordSize: OPTIONAL<INTEGER>;
    /**
     * @summary `maxRecordSize`.
     * @description
     * Non-brief. Maximum record size, in bytes. ANSI/NISO Z39.50-2003
     * §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly maxRecordSize: OPTIONAL<INTEGER>;
    /**
     * @summary `hours`.
     * @description
     * Non-brief. Human-readable hours when this database is available.
     * ANSI/NISO Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly hours: OPTIONAL<HumanString>;
    /**
     * @summary `bestTime`.
     * @description
     * Non-brief. Human-readable best time to access this database. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly bestTime: OPTIONAL<HumanString>;
    /**
     * @summary `lastUpdate`.
     * @description
     * Non-brief. Time of last update of this database. ANSI/NISO Z39.50-2003
     * §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly lastUpdate: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `updateInterval`.
     * @description
     * Non-brief. Update cycle or interval for this database. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly updateInterval: OPTIONAL<IntUnit>;
    /**
     * @summary `coverage`.
     * @description
     * Non-brief. Human-readable coverage dates of this database. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly coverage: OPTIONAL<HumanString>;
    /**
     * @summary `proprietary`.
     * @description
     * Non-brief. Whether the database contains proprietary information.
     * Mandatory in a full record. Search Proprietary `no` for databases that
     * are not proprietary. ANSI/NISO Z39.50-2003 §3.2.10.1.4, §3.2.10.3.2;
     * REC.1.
     * @public
     * @readonly
     */
    readonly proprietary: OPTIONAL<BOOLEAN>;
    /**
     * @summary `copyrightText`.
     * @description
     * Non-brief. Human-readable copyright issues for this database. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly copyrightText: OPTIONAL<HumanString>;
    /**
     * @summary `copyrightNotice`.
     * @description
     * Non-brief. Copyright notice the server expects the client to display to
     * the user when it can. Human-readable. ANSI/NISO Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly copyrightNotice: OPTIONAL<HumanString>;
    /**
     * @summary `producerContactInfo`.
     * @description
     * Non-brief. Description and contact for the database producer. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly producerContactInfo: OPTIONAL<ContactInfo>;
    /**
     * @summary `supplierContactInfo`.
     * @description
     * Non-brief. Description and contact for the database supplier. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly supplierContactInfo: OPTIONAL<ContactInfo>;
    /**
     * @summary `submissionContactInfo`.
     * @description
     * Non-brief. How to submit material for inclusion in this database, in
     * human-readable contact form. ANSI/NISO Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly submissionContactInfo: OPTIONAL<ContactInfo>;
    /**
     * @summary `accessInfo`.
     * @description
     * Non-brief. Query types, diagnostic sets, attribute sets, schemas, record
     * syntaxes, resource challenges (the category prose says resource reports),
     * access control, costs, variant sets, element set names, and unit systems
     * for this database. Every item listed here should also be listed on the
     * server AccessInfo. REC.1; ANSI/NISO Z39.50-2003 §3.2.10.3.2.
     * @public
     * @readonly
     */
    readonly accessInfo: OPTIONAL<AccessInfo>;

    constructor (
        commonInfo: OPTIONAL<CommonInfo>,
        name: DatabaseName,
        explainDatabase: OPTIONAL<NULL>,
        nicknames: OPTIONAL<DatabaseName[]>,
        icon: OPTIONAL<IconObject>,
        user_fee: BOOLEAN,
        available: BOOLEAN,
        titleString: OPTIONAL<HumanString>,
        keywords: OPTIONAL<HumanString[]>,
        description: OPTIONAL<HumanString>,
        associatedDbs: OPTIONAL<DatabaseList>,
        subDbs: OPTIONAL<DatabaseList>,
        disclaimers: OPTIONAL<HumanString>,
        news: OPTIONAL<HumanString>,
        recordCount: OPTIONAL<DatabaseInfo_recordCount>,
        defaultOrder: OPTIONAL<HumanString>,
        avRecordSize: OPTIONAL<INTEGER>,
        maxRecordSize: OPTIONAL<INTEGER>,
        hours: OPTIONAL<HumanString>,
        bestTime: OPTIONAL<HumanString>,
        lastUpdate: OPTIONAL<GeneralizedTime>,
        updateInterval: OPTIONAL<IntUnit>,
        coverage: OPTIONAL<HumanString>,
        proprietary: OPTIONAL<BOOLEAN>,
        copyrightText: OPTIONAL<HumanString>,
        copyrightNotice: OPTIONAL<HumanString>,
        producerContactInfo: OPTIONAL<ContactInfo>,
        supplierContactInfo: OPTIONAL<ContactInfo>,
        submissionContactInfo: OPTIONAL<ContactInfo>,
        accessInfo: OPTIONAL<AccessInfo>
    ) {
        this.commonInfo = commonInfo;
        this.name = name;
        this.explainDatabase = explainDatabase;
        this.nicknames = nicknames;
        this.icon = icon;
        this.user_fee = user_fee;
        this.available = available;
        this.titleString = titleString;
        this.keywords = keywords;
        this.description = description;
        this.associatedDbs = associatedDbs;
        this.subDbs = subDbs;
        this.disclaimers = disclaimers;
        this.news = news;
        this.recordCount = recordCount;
        this.defaultOrder = defaultOrder;
        this.avRecordSize = avRecordSize;
        this.maxRecordSize = maxRecordSize;
        this.hours = hours;
        this.bestTime = bestTime;
        this.lastUpdate = lastUpdate;
        this.updateInterval = updateInterval;
        this.coverage = coverage;
        this.proprietary = proprietary;
        this.copyrightText = copyrightText;
        this.copyrightNotice = copyrightNotice;
        this.producerContactInfo = producerContactInfo;
        this.supplierContactInfo = supplierContactInfo;
        this.submissionContactInfo = submissionContactInfo;
        this.accessInfo = accessInfo;
    }

    /**
     * @summary Restructures an object into a DatabaseInfo
     * @description
     * 
     * This takes an `object` and converts it to a `DatabaseInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DatabaseInfo`.
     * @returns {DatabaseInfo}
     */
    public static _from_object (_o: { [_K in keyof (DatabaseInfo)]: (DatabaseInfo)[_K] }): DatabaseInfo {
        return new DatabaseInfo(_o.commonInfo, _o.name, _o.explainDatabase, _o.nicknames, _o.icon, _o.user_fee, _o.available, _o.titleString, _o.keywords, _o.description, _o.associatedDbs, _o.subDbs, _o.disclaimers, _o.news, _o.recordCount, _o.defaultOrder, _o.avRecordSize, _o.maxRecordSize, _o.hours, _o.bestTime, _o.lastUpdate, _o.updateInterval, _o.coverage, _o.proprietary, _o.copyrightText, _o.copyrightNotice, _o.producerContactInfo, _o.supplierContactInfo, _o.submissionContactInfo, _o.accessInfo);
    }


}

/**
 * @summary The Leading Root Component Types of DatabaseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DatabaseInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("explainDatabase", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nicknames", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("icon", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("user-fee", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("available", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("titleString", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("keywords", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("associatedDbs", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("subDbs", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("disclaimers", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("news", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("recordCount", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("defaultOrder", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("avRecordSize", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("maxRecordSize", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("hours", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("bestTime", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("lastUpdate", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("updateInterval", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("coverage", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("proprietary", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("copyrightText", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("copyrightNotice", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("producerContactInfo", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("supplierContactInfo", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("submissionContactInfo", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("accessInfo", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of DatabaseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DatabaseInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DatabaseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DatabaseInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DatabaseInfo: $.ASN1Decoder<DatabaseInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DatabaseInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DatabaseInfo (el: _Element): DatabaseInfo {
    if (!_cached_decoder_for_DatabaseInfo) { _cached_decoder_for_DatabaseInfo = function (el: _Element): DatabaseInfo {
    let commonInfo: OPTIONAL<CommonInfo>;
    let name!: DatabaseName;
    let explainDatabase: OPTIONAL<NULL>;
    let nicknames: OPTIONAL<DatabaseName[]>;
    let icon: OPTIONAL<IconObject>;
    let user_fee!: BOOLEAN;
    let available!: BOOLEAN;
    let titleString: OPTIONAL<HumanString>;
    let keywords: OPTIONAL<HumanString[]>;
    let description: OPTIONAL<HumanString>;
    let associatedDbs: OPTIONAL<DatabaseList>;
    let subDbs: OPTIONAL<DatabaseList>;
    let disclaimers: OPTIONAL<HumanString>;
    let news: OPTIONAL<HumanString>;
    let recordCount: OPTIONAL<DatabaseInfo_recordCount>;
    let defaultOrder: OPTIONAL<HumanString>;
    let avRecordSize: OPTIONAL<INTEGER>;
    let maxRecordSize: OPTIONAL<INTEGER>;
    let hours: OPTIONAL<HumanString>;
    let bestTime: OPTIONAL<HumanString>;
    let lastUpdate: OPTIONAL<GeneralizedTime>;
    let updateInterval: OPTIONAL<IntUnit>;
    let coverage: OPTIONAL<HumanString>;
    let proprietary: OPTIONAL<BOOLEAN>;
    let copyrightText: OPTIONAL<HumanString>;
    let copyrightNotice: OPTIONAL<HumanString>;
    let producerContactInfo: OPTIONAL<ContactInfo>;
    let supplierContactInfo: OPTIONAL<ContactInfo>;
    let submissionContactInfo: OPTIONAL<ContactInfo>;
    let accessInfo: OPTIONAL<AccessInfo>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "name": (_el: _Element): void => { name = $._decode_implicit<DatabaseName>(() => _decode_DatabaseName)(_el); },
        "explainDatabase": (_el: _Element): void => { explainDatabase = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "nicknames": (_el: _Element): void => { nicknames = $._decode_implicit<DatabaseName[]>(() => $._decodeSequenceOf<DatabaseName>(() => _decode_DatabaseName))(_el); },
        "icon": (_el: _Element): void => { icon = $._decode_implicit<IconObject>(() => _decode_IconObject)(_el); },
        "user-fee": (_el: _Element): void => { user_fee = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "available": (_el: _Element): void => { available = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "titleString": (_el: _Element): void => { titleString = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "keywords": (_el: _Element): void => { keywords = $._decode_implicit<HumanString[]>(() => $._decodeSequenceOf<HumanString>(() => _decode_HumanString))(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "associatedDbs": (_el: _Element): void => { associatedDbs = $._decode_implicit<DatabaseList>(() => _decode_DatabaseList)(_el); },
        "subDbs": (_el: _Element): void => { subDbs = $._decode_implicit<DatabaseList>(() => _decode_DatabaseList)(_el); },
        "disclaimers": (_el: _Element): void => { disclaimers = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "news": (_el: _Element): void => { news = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "recordCount": (_el: _Element): void => { recordCount = $._decode_explicit<DatabaseInfo_recordCount>(() => _decode_DatabaseInfo_recordCount)(_el); },
        "defaultOrder": (_el: _Element): void => { defaultOrder = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "avRecordSize": (_el: _Element): void => { avRecordSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxRecordSize": (_el: _Element): void => { maxRecordSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "hours": (_el: _Element): void => { hours = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "bestTime": (_el: _Element): void => { bestTime = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "lastUpdate": (_el: _Element): void => { lastUpdate = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "updateInterval": (_el: _Element): void => { updateInterval = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(_el); },
        "coverage": (_el: _Element): void => { coverage = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "proprietary": (_el: _Element): void => { proprietary = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "copyrightText": (_el: _Element): void => { copyrightText = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "copyrightNotice": (_el: _Element): void => { copyrightNotice = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "producerContactInfo": (_el: _Element): void => { producerContactInfo = $._decode_implicit<ContactInfo>(() => _decode_ContactInfo)(_el); },
        "supplierContactInfo": (_el: _Element): void => { supplierContactInfo = $._decode_implicit<ContactInfo>(() => _decode_ContactInfo)(_el); },
        "submissionContactInfo": (_el: _Element): void => { submissionContactInfo = $._decode_implicit<ContactInfo>(() => _decode_ContactInfo)(_el); },
        "accessInfo": (_el: _Element): void => { accessInfo = $._decode_implicit<AccessInfo>(() => _decode_AccessInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DatabaseInfo,
        _extension_additions_list_spec_for_DatabaseInfo,
        _root_component_type_list_2_spec_for_DatabaseInfo,
        undefined,
    );
    return new DatabaseInfo(
        commonInfo,
        name,
        explainDatabase,
        nicknames,
        icon,
        user_fee,
        available,
        titleString,
        keywords,
        description,
        associatedDbs,
        subDbs,
        disclaimers,
        news,
        recordCount,
        defaultOrder,
        avRecordSize,
        maxRecordSize,
        hours,
        bestTime,
        lastUpdate,
        updateInterval,
        coverage,
        proprietary,
        copyrightText,
        copyrightNotice,
        producerContactInfo,
        supplierContactInfo,
        submissionContactInfo,
        accessInfo
    );
}; }
    return _cached_decoder_for_DatabaseInfo(el);
}

let _cached_encoder_for_DatabaseInfo: $.ASN1Encoder<DatabaseInfo> | null = null;

/**
 * @summary Encodes a(n) DatabaseInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DatabaseInfo, encoded as an ASN.1 Element.
 */
export
function _encode_DatabaseInfo (value: DatabaseInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DatabaseInfo) { _cached_encoder_for_DatabaseInfo = function (value: DatabaseInfo, elGetter: $.ASN1Encoder<DatabaseInfo>): _Element {
    const _components: _Element[] = new Array(30);
    let _components_i = 0;
    if (value.commonInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DatabaseName, $.BER)(value.name, $.BER);
    if (value.explainDatabase !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.explainDatabase, $.BER);
    }
    if (value.nicknames !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<DatabaseName>(() => _encode_DatabaseName, $.BER), $.BER)(value.nicknames, $.BER);
    }
    if (value.icon !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_IconObject, $.BER)(value.icon, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.user_fee, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.available, $.BER);
    if (value.titleString !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_HumanString, $.BER)(value.titleString, $.BER);
    }
    if (value.keywords !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<HumanString>(() => _encode_HumanString, $.BER), $.BER)(value.keywords, $.BER);
    }
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    if (value.associatedDbs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_DatabaseList, $.BER)(value.associatedDbs, $.BER);
    }
    if (value.subDbs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_DatabaseList, $.BER)(value.subDbs, $.BER);
    }
    if (value.disclaimers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_HumanString, $.BER)(value.disclaimers, $.BER);
    }
    if (value.news !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_HumanString, $.BER)(value.news, $.BER);
    }
    if (value.recordCount !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_DatabaseInfo_recordCount, $.BER)(value.recordCount, $.BER);
    }
    if (value.defaultOrder !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_HumanString, $.BER)(value.defaultOrder, $.BER);
    }
    if (value.avRecordSize !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.avRecordSize, $.BER);
    }
    if (value.maxRecordSize !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER)(value.maxRecordSize, $.BER);
    }
    if (value.hours !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_HumanString, $.BER)(value.hours, $.BER);
    }
    if (value.bestTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_HumanString, $.BER)(value.bestTime, $.BER);
    }
    if (value.lastUpdate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeGeneralizedTime, $.BER)(value.lastUpdate, $.BER);
    }
    if (value.updateInterval !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_IntUnit, $.BER)(value.updateInterval, $.BER);
    }
    if (value.coverage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_HumanString, $.BER)(value.coverage, $.BER);
    }
    if (value.proprietary !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeBoolean, $.BER)(value.proprietary, $.BER);
    }
    if (value.copyrightText !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_HumanString, $.BER)(value.copyrightText, $.BER);
    }
    if (value.copyrightNotice !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => _encode_HumanString, $.BER)(value.copyrightNotice, $.BER);
    }
    if (value.producerContactInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_ContactInfo, $.BER)(value.producerContactInfo, $.BER);
    }
    if (value.supplierContactInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => _encode_ContactInfo, $.BER)(value.supplierContactInfo, $.BER);
    }
    if (value.submissionContactInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_ContactInfo, $.BER)(value.submissionContactInfo, $.BER);
    }
    if (value.accessInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_AccessInfo, $.BER)(value.accessInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DatabaseInfo(value, elGetter);
}


/* eslint-enable */

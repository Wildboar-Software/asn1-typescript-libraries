/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
// export { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { IconObject, _decode_IconObject, _encode_IconObject } from "../RecordSyntax-explain/IconObject.ta.mjs";
// export { IconObject, _decode_IconObject, _encode_IconObject } from "../RecordSyntax-explain/IconObject.ta.mjs";
import { ContactInfo, _decode_ContactInfo, _encode_ContactInfo } from "../RecordSyntax-explain/ContactInfo.ta.mjs";
// export { ContactInfo, _decode_ContactInfo, _encode_ContactInfo } from "../RecordSyntax-explain/ContactInfo.ta.mjs";
import { DatabaseList, _decode_DatabaseList, _encode_DatabaseList } from "../RecordSyntax-explain/DatabaseList.ta.mjs";
// export { DatabaseList, _decode_DatabaseList, _encode_DatabaseList } from "../RecordSyntax-explain/DatabaseList.ta.mjs";
import { NetworkAddress, _decode_NetworkAddress, _encode_NetworkAddress } from "../RecordSyntax-explain/NetworkAddress.ta.mjs";
// export { NetworkAddress, _decode_NetworkAddress, _encode_NetworkAddress } from "../RecordSyntax-explain/NetworkAddress.ta.mjs";
import { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../RecordSyntax-explain/AccessInfo.ta.mjs";
// export { AccessInfo, _decode_AccessInfo, _encode_AccessInfo } from "../RecordSyntax-explain/AccessInfo.ta.mjs";


/**
 * @summary TargetInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetInfo ::= SEQUENCE {
 *   commonInfo          [0]    IMPLICIT CommonInfo OPTIONAL,
 *      -- Key elements follow:
 *   name                [1]    IMPLICIT InternationalString,
 *      -- Non-key brief elements follow:
 *   recent-news         [2]    IMPLICIT HumanString OPTIONAL,
 *   icon                [3]    IMPLICIT IconObject OPTIONAL,
 *   namedResultSets     [4]    IMPLICIT BOOLEAN,
 *   multipleDBsearch    [5]    IMPLICIT BOOLEAN,
 *   maxResultSets       [6]    IMPLICIT INTEGER OPTIONAL,
 *   maxResultSize       [7]    IMPLICIT INTEGER OPTIONAL,
 *   maxTerms            [8]    IMPLICIT INTEGER OPTIONAL,
 *   timeoutInterval     [9]    IMPLICIT IntUnit OPTIONAL,
 *   welcomeMessage      [10]   IMPLICIT HumanString OPTIONAL,
 *       -- non-brief elements follow:
 *       -- 'description' esn retrieves the following two (as well as brief):
 *   contactInfo         [11]   IMPLICIT ContactInfo OPTIONAL,
 *   description         [12]   IMPLICIT HumanString OPTIONAL,
 *   nicknames           [13]   IMPLICIT SEQUENCE OF InternationalString
 *                                               OPTIONAL,
 *   usage-restrictions  [14]   IMPLICIT HumanString OPTIONAL,
 *   paymentAddr         [15]   IMPLICIT HumanString OPTIONAL,
 *   hours               [16]   IMPLICIT HumanString OPTIONAL,
 *   dbCombinations      [17]   IMPLICIT SEQUENCE OF DatabaseList OPTIONAL,
 *   addresses           [18]   IMPLICIT SEQUENCE OF NetworkAddress OPTIONAL,
 *   languages           [101]  IMPLICIT SEQUENCE OF InternationalString OPTIONAL,
 *                   -- Languages supported for message strings.  Each is a three-character
 *                   -- language code from Z39.53-1994.
 * -- characterSets      [102]  this tag reserved for "character sets supported for name and message strings".
 * 
 *    -- commonAccessInfo elements list objects the target supports. All objects
 *    -- listed in AccessInfo for any individual database should also be listed
 *    -- here.
 *   commonAccessInfo    [19]   IMPLICIT AccessInfo OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TargetInfo {
    constructor (
        /**
         * @summary `commonInfo`.
         * @public
         * @readonly
         */
        readonly commonInfo: OPTIONAL<CommonInfo>,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: InternationalString,
        /**
         * @summary `recent_news`.
         * @public
         * @readonly
         */
        readonly recent_news: OPTIONAL<HumanString>,
        /**
         * @summary `icon`.
         * @public
         * @readonly
         */
        readonly icon: OPTIONAL<IconObject>,
        /**
         * @summary `namedResultSets`.
         * @public
         * @readonly
         */
        readonly namedResultSets: BOOLEAN,
        /**
         * @summary `multipleDBsearch`.
         * @public
         * @readonly
         */
        readonly multipleDBsearch: BOOLEAN,
        /**
         * @summary `maxResultSets`.
         * @public
         * @readonly
         */
        readonly maxResultSets: OPTIONAL<INTEGER>,
        /**
         * @summary `maxResultSize`.
         * @public
         * @readonly
         */
        readonly maxResultSize: OPTIONAL<INTEGER>,
        /**
         * @summary `maxTerms`.
         * @public
         * @readonly
         */
        readonly maxTerms: OPTIONAL<INTEGER>,
        /**
         * @summary `timeoutInterval`.
         * @public
         * @readonly
         */
        readonly timeoutInterval: OPTIONAL<IntUnit>,
        /**
         * @summary `welcomeMessage`.
         * @public
         * @readonly
         */
        readonly welcomeMessage: OPTIONAL<HumanString>,
        /**
         * @summary `contactInfo`.
         * @public
         * @readonly
         */
        readonly contactInfo: OPTIONAL<ContactInfo>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `nicknames`.
         * @public
         * @readonly
         */
        readonly nicknames: OPTIONAL<InternationalString[]>,
        /**
         * @summary `usage_restrictions`.
         * @public
         * @readonly
         */
        readonly usage_restrictions: OPTIONAL<HumanString>,
        /**
         * @summary `paymentAddr`.
         * @public
         * @readonly
         */
        readonly paymentAddr: OPTIONAL<HumanString>,
        /**
         * @summary `hours`.
         * @public
         * @readonly
         */
        readonly hours: OPTIONAL<HumanString>,
        /**
         * @summary `dbCombinations`.
         * @public
         * @readonly
         */
        readonly dbCombinations: OPTIONAL<DatabaseList[]>,
        /**
         * @summary `addresses`.
         * @public
         * @readonly
         */
        readonly addresses: OPTIONAL<NetworkAddress[]>,
        /**
         * @summary `languages`.
         * @public
         * @readonly
         */
        readonly languages: OPTIONAL<InternationalString[]>,
        /**
         * @summary `commonAccessInfo`.
         * @public
         * @readonly
         */
        readonly commonAccessInfo: OPTIONAL<AccessInfo>
    ) {}

    /**
     * @summary Restructures an object into a TargetInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TargetInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TargetInfo`.
     * @returns {TargetInfo}
     */
    public static _from_object (_o: { [_K in keyof (TargetInfo)]: (TargetInfo)[_K] }): TargetInfo {
        return new TargetInfo(_o.commonInfo, _o.name, _o.recent_news, _o.icon, _o.namedResultSets, _o.multipleDBsearch, _o.maxResultSets, _o.maxResultSize, _o.maxTerms, _o.timeoutInterval, _o.welcomeMessage, _o.contactInfo, _o.description, _o.nicknames, _o.usage_restrictions, _o.paymentAddr, _o.hours, _o.dbCombinations, _o.addresses, _o.languages, _o.commonAccessInfo);
    }


}

/**
 * @summary The Leading Root Component Types of TargetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TargetInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    /* FIXME: name COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("recent-news", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("icon", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("namedResultSets", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("multipleDBsearch", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("maxResultSets", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("maxResultSize", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("maxTerms", true, $.hasTag(_TagClass.context, 8)),
    /* FIXME: timeoutInterval COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("welcomeMessage", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("contactInfo", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("nicknames", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("usage-restrictions", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("paymentAddr", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("hours", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("dbCombinations", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("addresses", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("languages", true, $.hasTag(_TagClass.context, 101)),
    new $.ComponentSpec("commonAccessInfo", true, $.hasTag(_TagClass.context, 19))
];

/**
 * @summary The Trailing Root Component Types of TargetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TargetInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TargetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TargetInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TargetInfo: $.ASN1Decoder<TargetInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TargetInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TargetInfo (el: _Element): TargetInfo {
    if (!_cached_decoder_for_TargetInfo) { _cached_decoder_for_TargetInfo = function (el: _Element): TargetInfo {
    let commonInfo: OPTIONAL<CommonInfo>;
    let name!: InternationalString;
    let recent_news: OPTIONAL<HumanString>;
    let icon: OPTIONAL<IconObject>;
    let namedResultSets!: BOOLEAN;
    let multipleDBsearch!: BOOLEAN;
    let maxResultSets: OPTIONAL<INTEGER>;
    let maxResultSize: OPTIONAL<INTEGER>;
    let maxTerms: OPTIONAL<INTEGER>;
    let timeoutInterval: OPTIONAL<IntUnit>;
    let welcomeMessage: OPTIONAL<HumanString>;
    let contactInfo: OPTIONAL<ContactInfo>;
    let description: OPTIONAL<HumanString>;
    let nicknames: OPTIONAL<InternationalString[]>;
    let usage_restrictions: OPTIONAL<HumanString>;
    let paymentAddr: OPTIONAL<HumanString>;
    let hours: OPTIONAL<HumanString>;
    let dbCombinations: OPTIONAL<DatabaseList[]>;
    let addresses: OPTIONAL<NetworkAddress[]>;
    let languages: OPTIONAL<InternationalString[]>;
    let commonAccessInfo: OPTIONAL<AccessInfo>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "recent-news": (_el: _Element): void => { recent_news = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "icon": (_el: _Element): void => { icon = $._decode_implicit<IconObject>(() => _decode_IconObject)(_el); },
        "namedResultSets": (_el: _Element): void => { namedResultSets = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "multipleDBsearch": (_el: _Element): void => { multipleDBsearch = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "maxResultSets": (_el: _Element): void => { maxResultSets = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxResultSize": (_el: _Element): void => { maxResultSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxTerms": (_el: _Element): void => { maxTerms = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeoutInterval": (_el: _Element): void => { timeoutInterval = $._decode_implicit<IntUnit>(() => _decode_IntUnit)(_el); },
        "welcomeMessage": (_el: _Element): void => { welcomeMessage = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "contactInfo": (_el: _Element): void => { contactInfo = $._decode_implicit<ContactInfo>(() => _decode_ContactInfo)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "nicknames": (_el: _Element): void => { nicknames = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "usage-restrictions": (_el: _Element): void => { usage_restrictions = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "paymentAddr": (_el: _Element): void => { paymentAddr = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "hours": (_el: _Element): void => { hours = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "dbCombinations": (_el: _Element): void => { dbCombinations = $._decode_implicit<DatabaseList[]>(() => $._decodeSequenceOf<DatabaseList>(() => _decode_DatabaseList))(_el); },
        "addresses": (_el: _Element): void => { addresses = $._decode_implicit<NetworkAddress[]>(() => $._decodeSequenceOf<NetworkAddress>(() => _decode_NetworkAddress))(_el); },
        "languages": (_el: _Element): void => { languages = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "commonAccessInfo": (_el: _Element): void => { commonAccessInfo = $._decode_implicit<AccessInfo>(() => _decode_AccessInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TargetInfo,
        _extension_additions_list_spec_for_TargetInfo,
        _root_component_type_list_2_spec_for_TargetInfo,
        undefined,
    );
    return new TargetInfo(
        commonInfo,
        name,
        recent_news,
        icon,
        namedResultSets,
        multipleDBsearch,
        maxResultSets,
        maxResultSize,
        maxTerms,
        timeoutInterval,
        welcomeMessage,
        contactInfo,
        description,
        nicknames,
        usage_restrictions,
        paymentAddr,
        hours,
        dbCombinations,
        addresses,
        languages,
        commonAccessInfo
    );
}; }
    return _cached_decoder_for_TargetInfo(el);
}

let _cached_encoder_for_TargetInfo: $.ASN1Encoder<TargetInfo> | null = null;

/**
 * @summary Encodes a(n) TargetInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TargetInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TargetInfo (value: TargetInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TargetInfo) { _cached_encoder_for_TargetInfo = function (value: TargetInfo, elGetter: $.ASN1Encoder<TargetInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.name, $.BER),
            /* IF_ABSENT  */ ((value.recent_news === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_HumanString, $.BER)(value.recent_news, $.BER)),
            /* IF_ABSENT  */ ((value.icon === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_IconObject, $.BER)(value.icon, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.namedResultSets, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.multipleDBsearch, $.BER),
            /* IF_ABSENT  */ ((value.maxResultSets === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.maxResultSets, $.BER)),
            /* IF_ABSENT  */ ((value.maxResultSize === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.maxResultSize, $.BER)),
            /* IF_ABSENT  */ ((value.maxTerms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.maxTerms, $.BER)),
            /* IF_ABSENT  */ ((value.timeoutInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_IntUnit, $.BER)(value.timeoutInterval, $.BER)),
            /* IF_ABSENT  */ ((value.welcomeMessage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_HumanString, $.BER)(value.welcomeMessage, $.BER)),
            /* IF_ABSENT  */ ((value.contactInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_ContactInfo, $.BER)(value.contactInfo, $.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.nicknames === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.nicknames, $.BER)),
            /* IF_ABSENT  */ ((value.usage_restrictions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_HumanString, $.BER)(value.usage_restrictions, $.BER)),
            /* IF_ABSENT  */ ((value.paymentAddr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_HumanString, $.BER)(value.paymentAddr, $.BER)),
            /* IF_ABSENT  */ ((value.hours === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_HumanString, $.BER)(value.hours, $.BER)),
            /* IF_ABSENT  */ ((value.dbCombinations === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeSequenceOf<DatabaseList>(() => _encode_DatabaseList, $.BER), $.BER)(value.dbCombinations, $.BER)),
            /* IF_ABSENT  */ ((value.addresses === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => $._encodeSequenceOf<NetworkAddress>(() => _encode_NetworkAddress, $.BER), $.BER)(value.addresses, $.BER)),
            /* IF_ABSENT  */ ((value.languages === undefined) ? undefined : $._encode_implicit(_TagClass.context, 101, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.languages, $.BER)),
            /* IF_ABSENT  */ ((value.commonAccessInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_AccessInfo, $.BER)(value.commonAccessInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TargetInfo(value, elGetter);
}


/* eslint-enable */

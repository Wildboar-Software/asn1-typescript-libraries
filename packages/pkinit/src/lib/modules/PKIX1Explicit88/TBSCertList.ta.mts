/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Version, Version_v1 /* IMPORTED_LONG_NAMED_INTEGER */, v1 /* IMPORTED_SHORT_NAMED_INTEGER */, Version_v2 /* IMPORTED_LONG_NAMED_INTEGER */, v2 /* IMPORTED_SHORT_NAMED_INTEGER */, Version_v3 /* IMPORTED_LONG_NAMED_INTEGER */, v3 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Version, _encode_Version } from "../PKIX1Explicit88/Version.ta.mjs";
// export { Version, Version_v1 /* IMPORTED_LONG_NAMED_INTEGER */, v1 /* IMPORTED_SHORT_NAMED_INTEGER */, Version_v2 /* IMPORTED_LONG_NAMED_INTEGER */, v2 /* IMPORTED_SHORT_NAMED_INTEGER */, Version_v3 /* IMPORTED_LONG_NAMED_INTEGER */, v3 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Version, _encode_Version } from "../PKIX1Explicit88/Version.ta.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../PKIX1Explicit88/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../PKIX1Explicit88/AlgorithmIdentifier.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../PKIX1Explicit88/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../PKIX1Explicit88/Name.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../PKIX1Explicit88/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../PKIX1Explicit88/Time.ta.mjs";
import { TBSCertList_revokedCertificates_Item, _decode_TBSCertList_revokedCertificates_Item, _encode_TBSCertList_revokedCertificates_Item } from "../PKIX1Explicit88/TBSCertList-revokedCertificates-Item.ta.mjs";
// export { TBSCertList_revokedCertificates_Item, _decode_TBSCertList_revokedCertificates_Item, _encode_TBSCertList_revokedCertificates_Item } from "../PKIX1Explicit88/TBSCertList-revokedCertificates-Item.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../PKIX1Explicit88/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../PKIX1Explicit88/Extensions.ta.mjs";


/**
 * @summary TBSCertList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TBSCertList ::= SEQUENCE  {
 *      version                 Version OPTIONAL,
 *                                   -- if present, MUST be v2
 *      signature               AlgorithmIdentifier,
 *      issuer                  Name,
 *      thisUpdate              Time,
 *      nextUpdate              Time OPTIONAL,
 *      revokedCertificates     SEQUENCE OF SEQUENCE  {
 *           userCertificate         CertificateSerialNumber,
 *           revocationDate          Time,
 *           crlEntryExtensions      Extensions OPTIONAL
 *                                          -- if present, MUST be v2
 *                                }  OPTIONAL,
 *      crlExtensions           [0] Extensions OPTIONAL }
 * ```
 * 
 * @class
 */
export
class TBSCertList {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: AlgorithmIdentifier,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `thisUpdate`.
         * @public
         * @readonly
         */
        readonly thisUpdate: Time,
        /**
         * @summary `nextUpdate`.
         * @public
         * @readonly
         */
        readonly nextUpdate: OPTIONAL<Time>,
        /**
         * @summary `revokedCertificates`.
         * @public
         * @readonly
         */
        readonly revokedCertificates: OPTIONAL<TBSCertList_revokedCertificates_Item[]>,
        /**
         * @summary `crlExtensions`.
         * @public
         * @readonly
         */
        readonly crlExtensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a TBSCertList
     * @description
     * 
     * This takes an `object` and converts it to a `TBSCertList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSCertList`.
     * @returns {TBSCertList}
     */
    public static _from_object (_o: { [_K in keyof (TBSCertList)]: (TBSCertList)[_K] }): TBSCertList {
        return new TBSCertList(_o.version, _o.signature, _o.issuer, _o.thisUpdate, _o.nextUpdate, _o.revokedCertificates, _o.crlExtensions);
    }


}

/**
 * @summary The Leading Root Component Types of TBSCertList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TBSCertList: $.ComponentSpec[] = [
    new $.ComponentSpec("version", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("issuer", false, $.hasAnyTag),
    new $.ComponentSpec("thisUpdate", false, $.hasAnyTag),
    new $.ComponentSpec("nextUpdate", true, $.or($.hasTag(_TagClass.universal, 23), $.hasTag(_TagClass.universal, 24))),
    new $.ComponentSpec("revokedCertificates", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("crlExtensions", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of TBSCertList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TBSCertList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TBSCertList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TBSCertList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TBSCertList: $.ASN1Decoder<TBSCertList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TBSCertList (el: _Element): TBSCertList {
    if (!_cached_decoder_for_TBSCertList) { _cached_decoder_for_TBSCertList = function (el: _Element): TBSCertList {
    let version: OPTIONAL<Version>;
    let signature!: AlgorithmIdentifier;
    let issuer!: Name;
    let thisUpdate!: Time;
    let nextUpdate: OPTIONAL<Time>;
    let revokedCertificates: OPTIONAL<TBSCertList_revokedCertificates_Item[]>;
    let crlExtensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_Version(_el); },
        "signature": (_el: _Element): void => { signature = _decode_AlgorithmIdentifier(_el); },
        "issuer": (_el: _Element): void => { issuer = _decode_Name(_el); },
        "thisUpdate": (_el: _Element): void => { thisUpdate = _decode_Time(_el); },
        "nextUpdate": (_el: _Element): void => { nextUpdate = _decode_Time(_el); },
        "revokedCertificates": (_el: _Element): void => { revokedCertificates = $._decodeSequenceOf<TBSCertList_revokedCertificates_Item>(() => _decode_TBSCertList_revokedCertificates_Item)(_el); },
        "crlExtensions": (_el: _Element): void => { crlExtensions = $._decode_explicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSCertList,
        _extension_additions_list_spec_for_TBSCertList,
        _root_component_type_list_2_spec_for_TBSCertList,
        undefined,
    );
    return new TBSCertList(
        version,
        signature,
        issuer,
        thisUpdate,
        nextUpdate,
        revokedCertificates,
        crlExtensions
    );
}; }
    return _cached_decoder_for_TBSCertList(el);
}

let _cached_encoder_for_TBSCertList: $.ASN1Encoder<TBSCertList> | null = null;

/**
 * @summary Encodes a(n) TBSCertList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertList, encoded as an ASN.1 Element.
 */
export
function _encode_TBSCertList (value: TBSCertList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TBSCertList) { _cached_encoder_for_TBSCertList = function (value: TBSCertList, elGetter: $.ASN1Encoder<TBSCertList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.version === undefined) ? undefined : _encode_Version(value.version, $.BER)),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.signature, $.BER),
            /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
            /* REQUIRED   */ _encode_Time(value.thisUpdate, $.BER),
            /* IF_ABSENT  */ ((value.nextUpdate === undefined) ? undefined : _encode_Time(value.nextUpdate, $.BER)),
            /* IF_ABSENT  */ ((value.revokedCertificates === undefined) ? undefined : $._encodeSequenceOf<TBSCertList_revokedCertificates_Item>(() => _encode_TBSCertList_revokedCertificates_Item, $.BER)(value.revokedCertificates, $.BER)),
            /* IF_ABSENT  */ ((value.crlExtensions === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Extensions, $.BER)(value.crlExtensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TBSCertList(value, elGetter);
}


/* eslint-enable */

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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
// export { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary MMEIdentifierDeassociation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEIdentifierDeassociation ::= SEQUENCE
 * {
 *     iMSI        [1] IMSI,
 *     iMEI        [2] IMEI OPTIONAL,
 *     mSISDN      [3] MSISDN OPTIONAL,
 *     gUTI        [4] GUTI,
 *     location    [5] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMEIdentifierDeassociation {
    constructor (
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: IMSI,
        /**
         * @summary `iMEI`.
         * @public
         * @readonly
         */
        readonly iMEI: OPTIONAL<IMEI>,
        /**
         * @summary `mSISDN`.
         * @public
         * @readonly
         */
        readonly mSISDN: OPTIONAL<MSISDN>,
        /**
         * @summary `gUTI`.
         * @public
         * @readonly
         */
        readonly gUTI: GUTI,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>
    ) {}

    /**
     * @summary Restructures an object into a MMEIdentifierDeassociation
     * @description
     * 
     * This takes an `object` and converts it to a `MMEIdentifierDeassociation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMEIdentifierDeassociation`.
     * @returns {MMEIdentifierDeassociation}
     */
    public static _from_object (_o: { [_K in keyof (MMEIdentifierDeassociation)]: (MMEIdentifierDeassociation)[_K] }): MMEIdentifierDeassociation {
        return new MMEIdentifierDeassociation(_o.iMSI, _o.iMEI, _o.mSISDN, _o.gUTI, _o.location);
    }


}

/**
 * @summary The Leading Root Component Types of MMEIdentifierDeassociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMEIdentifierDeassociation: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gUTI", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of MMEIdentifierDeassociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMEIdentifierDeassociation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMEIdentifierDeassociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMEIdentifierDeassociation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMEIdentifierDeassociation: $.ASN1Decoder<MMEIdentifierDeassociation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEIdentifierDeassociation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEIdentifierDeassociation (el: _Element): MMEIdentifierDeassociation {
    if (!_cached_decoder_for_MMEIdentifierDeassociation) { _cached_decoder_for_MMEIdentifierDeassociation = function (el: _Element): MMEIdentifierDeassociation {
    let iMSI!: IMSI;
    let iMEI: OPTIONAL<IMEI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let gUTI!: GUTI;
    let location: OPTIONAL<Location>;
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<GUTI>(() => _decode_GUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMEIdentifierDeassociation,
        _extension_additions_list_spec_for_MMEIdentifierDeassociation,
        _root_component_type_list_2_spec_for_MMEIdentifierDeassociation,
        undefined,
    );
    return new MMEIdentifierDeassociation(
        iMSI,
        iMEI,
        mSISDN,
        gUTI,
        location
    );
}; }
    return _cached_decoder_for_MMEIdentifierDeassociation(el);
}

let _cached_encoder_for_MMEIdentifierDeassociation: $.ASN1Encoder<MMEIdentifierDeassociation> | null = null;

/**
 * @summary Encodes a(n) MMEIdentifierDeassociation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEIdentifierDeassociation, encoded as an ASN.1 Element.
 */
export
function _encode_MMEIdentifierDeassociation (value: MMEIdentifierDeassociation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEIdentifierDeassociation) { _cached_encoder_for_MMEIdentifierDeassociation = function (value: MMEIdentifierDeassociation, elGetter: $.ASN1Encoder<MMEIdentifierDeassociation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER),
            /* IF_ABSENT  */ ((value.iMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IMEI, $.BER)(value.iMEI, $.BER)),
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_GUTI, $.BER)(value.gUTI, $.BER),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Location, $.BER)(value.location, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMEIdentifierDeassociation(value, elGetter);
}


/* eslint-enable */

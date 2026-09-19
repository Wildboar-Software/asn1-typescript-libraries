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
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { ACProfiles, _decode_ACProfiles, _encode_ACProfiles } from "../TS33128Payloads/ACProfiles.ta.mjs";
// export { ACProfiles, _decode_ACProfiles, _encode_ACProfiles } from "../TS33128Payloads/ACProfiles.ta.mjs";


/**
 * @summary EESEECContextRelocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESEECContextRelocation ::= SEQUENCE
 * {
 *     eECID           [1] UTF8String,
 *     eECContextID    [2] UTF8String,
 *     gPSI            [3] GPSI OPTIONAL,
 *     uELoc           [4] Location OPTIONAL,
 *     aCProfiles      [5] ACProfiles OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EESEECContextRelocation {
    constructor (
        /**
         * @summary `eECID`.
         * @public
         * @readonly
         */
        readonly eECID: UTF8String,
        /**
         * @summary `eECContextID`.
         * @public
         * @readonly
         */
        readonly eECContextID: UTF8String,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `uELoc`.
         * @public
         * @readonly
         */
        readonly uELoc: OPTIONAL<Location>,
        /**
         * @summary `aCProfiles`.
         * @public
         * @readonly
         */
        readonly aCProfiles: OPTIONAL<ACProfiles>
    ) {}

    /**
     * @summary Restructures an object into a EESEECContextRelocation
     * @description
     * 
     * This takes an `object` and converts it to a `EESEECContextRelocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EESEECContextRelocation`.
     * @returns {EESEECContextRelocation}
     */
    public static _from_object (_o: { [_K in keyof (EESEECContextRelocation)]: (EESEECContextRelocation)[_K] }): EESEECContextRelocation {
        return new EESEECContextRelocation(_o.eECID, _o.eECContextID, _o.gPSI, _o.uELoc, _o.aCProfiles);
    }


}

/**
 * @summary The Leading Root Component Types of EESEECContextRelocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EESEECContextRelocation: $.ComponentSpec[] = [
    new $.ComponentSpec("eECID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eECContextID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uELoc", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aCProfiles", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of EESEECContextRelocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EESEECContextRelocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EESEECContextRelocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EESEECContextRelocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EESEECContextRelocation: $.ASN1Decoder<EESEECContextRelocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESEECContextRelocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESEECContextRelocation (el: _Element): EESEECContextRelocation {
    if (!_cached_decoder_for_EESEECContextRelocation) { _cached_decoder_for_EESEECContextRelocation = function (el: _Element): EESEECContextRelocation {
    let eECID!: UTF8String;
    let eECContextID!: UTF8String;
    let gPSI: OPTIONAL<GPSI>;
    let uELoc: OPTIONAL<Location>;
    let aCProfiles: OPTIONAL<ACProfiles>;
    const callbacks: $.DecodingMap = {
        "eECID": (_el: _Element): void => { eECID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eECContextID": (_el: _Element): void => { eECContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "uELoc": (_el: _Element): void => { uELoc = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "aCProfiles": (_el: _Element): void => { aCProfiles = $._decode_implicit<ACProfiles>(() => _decode_ACProfiles)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EESEECContextRelocation,
        _extension_additions_list_spec_for_EESEECContextRelocation,
        _root_component_type_list_2_spec_for_EESEECContextRelocation,
        undefined,
    );
    return new EESEECContextRelocation(
        eECID,
        eECContextID,
        gPSI,
        uELoc,
        aCProfiles
    );
}; }
    return _cached_decoder_for_EESEECContextRelocation(el);
}

let _cached_encoder_for_EESEECContextRelocation: $.ASN1Encoder<EESEECContextRelocation> | null = null;

/**
 * @summary Encodes a(n) EESEECContextRelocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESEECContextRelocation, encoded as an ASN.1 Element.
 */
export
function _encode_EESEECContextRelocation (value: EESEECContextRelocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESEECContextRelocation) { _cached_encoder_for_EESEECContextRelocation = function (value: EESEECContextRelocation, elGetter: $.ASN1Encoder<EESEECContextRelocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.eECID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.eECContextID, $.BER),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.uELoc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Location, $.BER)(value.uELoc, $.BER)),
            /* IF_ABSENT  */ ((value.aCProfiles === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ACProfiles, $.BER)(value.aCProfiles, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EESEECContextRelocation(value, elGetter);
}


/* eslint-enable */

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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { IGCS_Address, _decode_IGCS_Address, _encode_IGCS_Address } from "../SCPP-MESSAGES/IGCS-Address.ta.mjs";
// export { IGCS_Address, _decode_IGCS_Address, _encode_IGCS_Address } from "../SCPP-MESSAGES/IGCS-Address.ta.mjs";
import { SupportedSpamFilters, _decode_SupportedSpamFilters, _encode_SupportedSpamFilters } from "../SCPP-MESSAGES/SupportedSpamFilters.ta.mjs";
// export { SupportedSpamFilters, _decode_SupportedSpamFilters, _encode_SupportedSpamFilters } from "../SCPP-MESSAGES/SupportedSpamFilters.ta.mjs";
import { IGCS_Signature, _decode_IGCS_Signature, _encode_IGCS_Signature } from "../SCPP-MESSAGES/IGCS-Signature.ta.mjs";
// export { IGCS_Signature, _decode_IGCS_Signature, _encode_IGCS_Signature } from "../SCPP-MESSAGES/IGCS-Signature.ta.mjs";


/**
 * @summary PeerSetupDEF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeerSetupDEF ::= SEQUENCE {
 *   setupResponse     BOOLEAN,
 *   sgfList           SEQUENCE OF IGCS-Address,
 *   rgfList           SEQUENCE OF IGCS-Address,
 *   supportedFilters  SupportedSpamFilters,
 *   igcsSignature     IGCS-Signature
 * }
 * ```
 * 
 * @class
 */
export
class PeerSetupDEF {
    constructor (
        /**
         * @summary `setupResponse`.
         * @public
         * @readonly
         */
        readonly setupResponse: BOOLEAN,
        /**
         * @summary `sgfList`.
         * @public
         * @readonly
         */
        readonly sgfList: IGCS_Address[],
        /**
         * @summary `rgfList`.
         * @public
         * @readonly
         */
        readonly rgfList: IGCS_Address[],
        /**
         * @summary `supportedFilters`.
         * @public
         * @readonly
         */
        readonly supportedFilters: SupportedSpamFilters,
        /**
         * @summary `igcsSignature`.
         * @public
         * @readonly
         */
        readonly igcsSignature: IGCS_Signature
    ) {}

    /**
     * @summary Restructures an object into a PeerSetupDEF
     * @description
     * 
     * This takes an `object` and converts it to a `PeerSetupDEF`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PeerSetupDEF`.
     * @returns {PeerSetupDEF}
     */
    public static _from_object (_o: { [_K in keyof (PeerSetupDEF)]: (PeerSetupDEF)[_K] }): PeerSetupDEF {
        return new PeerSetupDEF(_o.setupResponse, _o.sgfList, _o.rgfList, _o.supportedFilters, _o.igcsSignature);
    }


}

/**
 * @summary The Leading Root Component Types of PeerSetupDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PeerSetupDEF: $.ComponentSpec[] = [
    new $.ComponentSpec("setupResponse", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("sgfList", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("rgfList", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("supportedFilters", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("igcsSignature", false, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PeerSetupDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PeerSetupDEF: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PeerSetupDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PeerSetupDEF: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PeerSetupDEF: $.ASN1Decoder<PeerSetupDEF> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeerSetupDEF
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PeerSetupDEF (el: _Element): PeerSetupDEF {
    if (!_cached_decoder_for_PeerSetupDEF) { _cached_decoder_for_PeerSetupDEF = function (el: _Element): PeerSetupDEF {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("PeerSetupDEF contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "setupResponse";
    sequence[1].name = "sgfList";
    sequence[2].name = "rgfList";
    sequence[3].name = "supportedFilters";
    sequence[4].name = "igcsSignature";
    let setupResponse!: BOOLEAN;
    let sgfList!: IGCS_Address[];
    let rgfList!: IGCS_Address[];
    let supportedFilters!: SupportedSpamFilters;
    let igcsSignature!: IGCS_Signature;
    setupResponse = $._decodeBoolean(sequence[0]);
    sgfList = $._decodeSequenceOf<IGCS_Address>(() => _decode_IGCS_Address)(sequence[1]);
    rgfList = $._decodeSequenceOf<IGCS_Address>(() => _decode_IGCS_Address)(sequence[2]);
    supportedFilters = _decode_SupportedSpamFilters(sequence[3]);
    igcsSignature = _decode_IGCS_Signature(sequence[4]);
    return new PeerSetupDEF(
        setupResponse,
        sgfList,
        rgfList,
        supportedFilters,
        igcsSignature,

    );
}; }
    return _cached_decoder_for_PeerSetupDEF(el);
}

let _cached_encoder_for_PeerSetupDEF: $.ASN1Encoder<PeerSetupDEF> | null = null;

/**
 * @summary Encodes a(n) PeerSetupDEF into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeerSetupDEF, encoded as an ASN.1 Element.
 */
export
function _encode_PeerSetupDEF (value: PeerSetupDEF, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PeerSetupDEF) { _cached_encoder_for_PeerSetupDEF = function (value: PeerSetupDEF, elGetter: $.ASN1Encoder<PeerSetupDEF>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.setupResponse, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<IGCS_Address>(() => _encode_IGCS_Address, $.BER)(value.sgfList, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<IGCS_Address>(() => _encode_IGCS_Address, $.BER)(value.rgfList, $.BER),
            /* REQUIRED   */ _encode_SupportedSpamFilters(value.supportedFilters, $.BER),
            /* REQUIRED   */ _encode_IGCS_Signature(value.igcsSignature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PeerSetupDEF(value, elGetter);
}


/* eslint-enable */

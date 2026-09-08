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
import { GF_Updates, _decode_GF_Updates, _encode_GF_Updates } from "../SCPP-MESSAGES/GF-Updates.ta.mjs";
// export { GF_Updates, _decode_GF_Updates, _encode_GF_Updates } from "../SCPP-MESSAGES/GF-Updates.ta.mjs";
import { SupportedSpamFilters, _decode_SupportedSpamFilters, _encode_SupportedSpamFilters } from "../SCPP-MESSAGES/SupportedSpamFilters.ta.mjs";
// export { SupportedSpamFilters, _decode_SupportedSpamFilters, _encode_SupportedSpamFilters } from "../SCPP-MESSAGES/SupportedSpamFilters.ta.mjs";


/**
 * @summary PeerKeepAliveDEF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeerKeepAliveDEF ::= SEQUENCE {
 *   sgfUpdates      GF-Updates,
 *   rgfUpdates      GF-Updates,
 *   filtersUpdates  SupportedSpamFilters
 * }
 * ```
 * 
 * @class
 */
export
class PeerKeepAliveDEF {
    constructor (
        /**
         * @summary `sgfUpdates`.
         * @public
         * @readonly
         */
        readonly sgfUpdates: GF_Updates,
        /**
         * @summary `rgfUpdates`.
         * @public
         * @readonly
         */
        readonly rgfUpdates: GF_Updates,
        /**
         * @summary `filtersUpdates`.
         * @public
         * @readonly
         */
        readonly filtersUpdates: SupportedSpamFilters
    ) {}

    /**
     * @summary Restructures an object into a PeerKeepAliveDEF
     * @description
     * 
     * This takes an `object` and converts it to a `PeerKeepAliveDEF`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PeerKeepAliveDEF`.
     * @returns {PeerKeepAliveDEF}
     */
    public static _from_object (_o: { [_K in keyof (PeerKeepAliveDEF)]: (PeerKeepAliveDEF)[_K] }): PeerKeepAliveDEF {
        return new PeerKeepAliveDEF(_o.sgfUpdates, _o.rgfUpdates, _o.filtersUpdates);
    }


}

/**
 * @summary The Leading Root Component Types of PeerKeepAliveDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PeerKeepAliveDEF: $.ComponentSpec[] = [
    new $.ComponentSpec("sgfUpdates", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("rgfUpdates", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("filtersUpdates", false, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PeerKeepAliveDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PeerKeepAliveDEF: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PeerKeepAliveDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PeerKeepAliveDEF: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PeerKeepAliveDEF: $.ASN1Decoder<PeerKeepAliveDEF> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeerKeepAliveDEF
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PeerKeepAliveDEF (el: _Element): PeerKeepAliveDEF {
    if (!_cached_decoder_for_PeerKeepAliveDEF) { _cached_decoder_for_PeerKeepAliveDEF = function (el: _Element): PeerKeepAliveDEF {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("PeerKeepAliveDEF contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sgfUpdates";
    sequence[1].name = "rgfUpdates";
    sequence[2].name = "filtersUpdates";
    let sgfUpdates!: GF_Updates;
    let rgfUpdates!: GF_Updates;
    let filtersUpdates!: SupportedSpamFilters;
    sgfUpdates = _decode_GF_Updates(sequence[0]);
    rgfUpdates = _decode_GF_Updates(sequence[1]);
    filtersUpdates = _decode_SupportedSpamFilters(sequence[2]);
    return new PeerKeepAliveDEF(
        sgfUpdates,
        rgfUpdates,
        filtersUpdates,

    );
}; }
    return _cached_decoder_for_PeerKeepAliveDEF(el);
}

let _cached_encoder_for_PeerKeepAliveDEF: $.ASN1Encoder<PeerKeepAliveDEF> | null = null;

/**
 * @summary Encodes a(n) PeerKeepAliveDEF into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeerKeepAliveDEF, encoded as an ASN.1 Element.
 */
export
function _encode_PeerKeepAliveDEF (value: PeerKeepAliveDEF, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PeerKeepAliveDEF) { _cached_encoder_for_PeerKeepAliveDEF = function (value: PeerKeepAliveDEF, elGetter: $.ASN1Encoder<PeerKeepAliveDEF>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GF_Updates(value.sgfUpdates, $.BER),
            /* REQUIRED   */ _encode_GF_Updates(value.rgfUpdates, $.BER),
            /* REQUIRED   */ _encode_SupportedSpamFilters(value.filtersUpdates, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PeerKeepAliveDEF(value, elGetter);
}


/* eslint-enable */

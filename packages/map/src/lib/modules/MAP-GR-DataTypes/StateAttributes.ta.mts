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



/**
 * @summary StateAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StateAttributes ::= SEQUENCE {
 *     downlinkAttached    [5] NULL    OPTIONAL,
 *     uplinkAttached    [6] NULL    OPTIONAL,
 *     dualCommunication    [7] NULL    OPTIONAL,
 *     callOriginator    [8] NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StateAttributes {
    constructor (
        /**
         * @summary `downlinkAttached`.
         * @public
         * @readonly
         */
        readonly downlinkAttached: OPTIONAL<NULL>,
        /**
         * @summary `uplinkAttached`.
         * @public
         * @readonly
         */
        readonly uplinkAttached: OPTIONAL<NULL>,
        /**
         * @summary `dualCommunication`.
         * @public
         * @readonly
         */
        readonly dualCommunication: OPTIONAL<NULL>,
        /**
         * @summary `callOriginator`.
         * @public
         * @readonly
         */
        readonly callOriginator: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a StateAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `StateAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StateAttributes`.
     * @returns {StateAttributes}
     */
    public static _from_object (_o: { [_K in keyof (StateAttributes)]: (StateAttributes)[_K] }): StateAttributes {
        return new StateAttributes(_o.downlinkAttached, _o.uplinkAttached, _o.dualCommunication, _o.callOriginator);
    }


}

/**
 * @summary The Leading Root Component Types of StateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StateAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("downlinkAttached", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("uplinkAttached", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("dualCommunication", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("callOriginator", true, $.hasTag(_TagClass.context, 8), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of StateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StateAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StateAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StateAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StateAttributes: $.ASN1Decoder<StateAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StateAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StateAttributes (el: _Element): StateAttributes {
    if (!_cached_decoder_for_StateAttributes) { _cached_decoder_for_StateAttributes = function (el: _Element): StateAttributes {
    let downlinkAttached: OPTIONAL<NULL>;
    let uplinkAttached: OPTIONAL<NULL>;
    let dualCommunication: OPTIONAL<NULL>;
    let callOriginator: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "downlinkAttached": (_el: _Element): void => { downlinkAttached = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "uplinkAttached": (_el: _Element): void => { uplinkAttached = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "dualCommunication": (_el: _Element): void => { dualCommunication = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "callOriginator": (_el: _Element): void => { callOriginator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StateAttributes,
        _extension_additions_list_spec_for_StateAttributes,
        _root_component_type_list_2_spec_for_StateAttributes,
        undefined,
    );
    return new StateAttributes(
        downlinkAttached,
        uplinkAttached,
        dualCommunication,
        callOriginator
    );
}; }
    return _cached_decoder_for_StateAttributes(el);
}

let _cached_encoder_for_StateAttributes: $.ASN1Encoder<StateAttributes> | null = null;

/**
 * @summary Encodes a(n) StateAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StateAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_StateAttributes (value: StateAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StateAttributes) { _cached_encoder_for_StateAttributes = function (value: StateAttributes, elGetter: $.ASN1Encoder<StateAttributes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.downlinkAttached === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value.downlinkAttached, $.BER)),
            /* IF_ABSENT  */ ((value.uplinkAttached === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.uplinkAttached, $.BER)),
            /* IF_ABSENT  */ ((value.dualCommunication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.dualCommunication, $.BER)),
            /* IF_ABSENT  */ ((value.callOriginator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.callOriginator, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StateAttributes(value, elGetter);
}


/* eslint-enable */

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
import { ProximitySupport, _decode_ProximitySupport, _encode_ProximitySupport } from "../RecordSyntax-explain/ProximitySupport.ta.mjs";
// export { ProximitySupport, _decode_ProximitySupport, _encode_ProximitySupport } from "../RecordSyntax-explain/ProximitySupport.ta.mjs";


/**
 * @summary RpnCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RpnCapabilities ::= SEQUENCE {
 *   operators                     [0] IMPLICIT SEQUENCE OF INTEGER OPTIONAL,
 *                                 -- Omitted means all operators are supported.
 *   resultSetAsOperandSupported   [1] IMPLICIT BOOLEAN,
 *   restrictionOperandSupported   [2] IMPLICIT BOOLEAN,
 *   proximity                     [3] IMPLICIT ProximitySupport OPTIONAL}
 * ```
 * 
 * @class
 */
export
class RpnCapabilities {
    constructor (
        /**
         * @summary `operators`.
         * @public
         * @readonly
         */
        readonly operators: OPTIONAL<INTEGER[]>,
        /**
         * @summary `resultSetAsOperandSupported`.
         * @public
         * @readonly
         */
        readonly resultSetAsOperandSupported: BOOLEAN,
        /**
         * @summary `restrictionOperandSupported`.
         * @public
         * @readonly
         */
        readonly restrictionOperandSupported: BOOLEAN,
        /**
         * @summary `proximity`.
         * @public
         * @readonly
         */
        readonly proximity: OPTIONAL<ProximitySupport>
    ) {}

    /**
     * @summary Restructures an object into a RpnCapabilities
     * @description
     * 
     * This takes an `object` and converts it to a `RpnCapabilities`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RpnCapabilities`.
     * @returns {RpnCapabilities}
     */
    public static _from_object (_o: { [_K in keyof (RpnCapabilities)]: (RpnCapabilities)[_K] }): RpnCapabilities {
        return new RpnCapabilities(_o.operators, _o.resultSetAsOperandSupported, _o.restrictionOperandSupported, _o.proximity);
    }


}

/**
 * @summary The Leading Root Component Types of RpnCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RpnCapabilities: $.ComponentSpec[] = [
    new $.ComponentSpec("operators", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("resultSetAsOperandSupported", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("restrictionOperandSupported", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("proximity", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of RpnCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RpnCapabilities: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RpnCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RpnCapabilities: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RpnCapabilities: $.ASN1Decoder<RpnCapabilities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RpnCapabilities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RpnCapabilities (el: _Element): RpnCapabilities {
    if (!_cached_decoder_for_RpnCapabilities) { _cached_decoder_for_RpnCapabilities = function (el: _Element): RpnCapabilities {
    let operators: OPTIONAL<INTEGER[]>;
    let resultSetAsOperandSupported!: BOOLEAN;
    let restrictionOperandSupported!: BOOLEAN;
    let proximity: OPTIONAL<ProximitySupport>;
    const callbacks: $.DecodingMap = {
        "operators": (_el: _Element): void => { operators = $._decode_implicit<INTEGER[]>(() => $._decodeSequenceOf<INTEGER>(() => $._decodeInteger))(_el); },
        "resultSetAsOperandSupported": (_el: _Element): void => { resultSetAsOperandSupported = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "restrictionOperandSupported": (_el: _Element): void => { restrictionOperandSupported = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "proximity": (_el: _Element): void => { proximity = $._decode_implicit<ProximitySupport>(() => _decode_ProximitySupport)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RpnCapabilities,
        _extension_additions_list_spec_for_RpnCapabilities,
        _root_component_type_list_2_spec_for_RpnCapabilities,
        undefined,
    );
    return new RpnCapabilities(
        operators,
        resultSetAsOperandSupported,
        restrictionOperandSupported,
        proximity
    );
}; }
    return _cached_decoder_for_RpnCapabilities(el);
}

let _cached_encoder_for_RpnCapabilities: $.ASN1Encoder<RpnCapabilities> | null = null;

/**
 * @summary Encodes a(n) RpnCapabilities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RpnCapabilities, encoded as an ASN.1 Element.
 */
export
function _encode_RpnCapabilities (value: RpnCapabilities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RpnCapabilities) { _cached_encoder_for_RpnCapabilities = function (value: RpnCapabilities, elGetter: $.ASN1Encoder<RpnCapabilities>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.operators === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER), $.BER)(value.operators, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.resultSetAsOperandSupported, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.restrictionOperandSupported, $.BER),
            /* IF_ABSENT  */ ((value.proximity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ProximitySupport, $.BER)(value.proximity, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RpnCapabilities(value, elGetter);
}


/* eslint-enable */

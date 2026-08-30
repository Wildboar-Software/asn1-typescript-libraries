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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { TraceReference, _decode_TraceReference, _encode_TraceReference } from "../MAP-OM-DataTypes/TraceReference.ta.mjs";
// export { TraceReference, _decode_TraceReference, _encode_TraceReference } from "../MAP-OM-DataTypes/TraceReference.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { TraceReference2, _decode_TraceReference2, _encode_TraceReference2 } from "../MAP-OM-DataTypes/TraceReference2.ta.mjs";
// export { TraceReference2, _decode_TraceReference2, _encode_TraceReference2 } from "../MAP-OM-DataTypes/TraceReference2.ta.mjs";


/**
 * @summary DeactivateTraceModeArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeactivateTraceModeArg ::= SEQUENCE {
 *     imsi    [0] IMSI    OPTIONAL,
 *     traceReference    [1] TraceReference,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ...,
 *     traceReference2    [3] TraceReference2    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class DeactivateTraceModeArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `traceReference`.
         * @public
         * @readonly
         */
        readonly traceReference: TraceReference,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `traceReference2`.
         * @public
         * @readonly
         */
        readonly traceReference2: OPTIONAL<TraceReference2>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DeactivateTraceModeArg
     * @description
     * 
     * This takes an `object` and converts it to a `DeactivateTraceModeArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeactivateTraceModeArg`.
     * @returns {DeactivateTraceModeArg}
     */
    public static _from_object (_o: { [_K in keyof (DeactivateTraceModeArg)]: (DeactivateTraceModeArg)[_K] }): DeactivateTraceModeArg {
        return new DeactivateTraceModeArg(_o.imsi, _o.traceReference, _o.extensionContainer, _o.traceReference2, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DeactivateTraceModeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeactivateTraceModeArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("traceReference", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DeactivateTraceModeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeactivateTraceModeArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeactivateTraceModeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeactivateTraceModeArg: $.ComponentSpec[] = [
    new $.ComponentSpec("traceReference2", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

let _cached_decoder_for_DeactivateTraceModeArg: $.ASN1Decoder<DeactivateTraceModeArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeactivateTraceModeArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeactivateTraceModeArg (el: _Element): DeactivateTraceModeArg {
    if (!_cached_decoder_for_DeactivateTraceModeArg) { _cached_decoder_for_DeactivateTraceModeArg = function (el: _Element): DeactivateTraceModeArg {
    let imsi: OPTIONAL<IMSI>;
    let traceReference!: TraceReference;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let traceReference2: OPTIONAL<TraceReference2>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "traceReference": (_el: _Element): void => { traceReference = $._decode_implicit<TraceReference>(() => _decode_TraceReference)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "traceReference2": (_el: _Element): void => { traceReference2 = $._decode_implicit<TraceReference2>(() => _decode_TraceReference2)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeactivateTraceModeArg,
        _extension_additions_list_spec_for_DeactivateTraceModeArg,
        _root_component_type_list_2_spec_for_DeactivateTraceModeArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DeactivateTraceModeArg(
        imsi,
        traceReference,
        extensionContainer,
        traceReference2,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DeactivateTraceModeArg(el);
}

let _cached_encoder_for_DeactivateTraceModeArg: $.ASN1Encoder<DeactivateTraceModeArg> | null = null;

/**
 * @summary Encodes a(n) DeactivateTraceModeArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeactivateTraceModeArg, encoded as an ASN.1 Element.
 */
export
function _encode_DeactivateTraceModeArg (value: DeactivateTraceModeArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeactivateTraceModeArg) { _cached_encoder_for_DeactivateTraceModeArg = function (value: DeactivateTraceModeArg, elGetter: $.ASN1Encoder<DeactivateTraceModeArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TraceReference, $.BER)(value.traceReference, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.traceReference2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TraceReference2, $.BER)(value.traceReference2, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeactivateTraceModeArg(value, elGetter);
}


/* eslint-enable */

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
import { QoS_Class_Identifier, _decode_QoS_Class_Identifier, _encode_QoS_Class_Identifier } from "../MAP-MS-DataTypes/QoS-Class-Identifier.ta.mjs";
// export { QoS_Class_Identifier, _decode_QoS_Class_Identifier, _encode_QoS_Class_Identifier } from "../MAP-MS-DataTypes/QoS-Class-Identifier.ta.mjs";
import { Allocation_Retention_Priority, _decode_Allocation_Retention_Priority, _encode_Allocation_Retention_Priority } from "../MAP-MS-DataTypes/Allocation-Retention-Priority.ta.mjs";
// export { Allocation_Retention_Priority, _decode_Allocation_Retention_Priority, _encode_Allocation_Retention_Priority } from "../MAP-MS-DataTypes/Allocation-Retention-Priority.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary EPS_QoS_Subscribed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPS-QoS-Subscribed ::= SEQUENCE {
 *     qos-Class-Identifier    [0] QoS-Class-Identifier,
 *     allocation-Retention-Priority    [1] Allocation-Retention-Priority,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class EPS_QoS_Subscribed {
    constructor (
        /**
         * @summary `qos_Class_Identifier`.
         * @public
         * @readonly
         */
        readonly qos_Class_Identifier: QoS_Class_Identifier,
        /**
         * @summary `allocation_Retention_Priority`.
         * @public
         * @readonly
         */
        readonly allocation_Retention_Priority: Allocation_Retention_Priority,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EPS_QoS_Subscribed
     * @description
     * 
     * This takes an `object` and converts it to a `EPS_QoS_Subscribed`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPS_QoS_Subscribed`.
     * @returns {EPS_QoS_Subscribed}
     */
    public static _from_object (_o: { [_K in keyof (EPS_QoS_Subscribed)]: (EPS_QoS_Subscribed)[_K] }): EPS_QoS_Subscribed {
        return new EPS_QoS_Subscribed(_o.qos_Class_Identifier, _o.allocation_Retention_Priority, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EPS_QoS_Subscribed
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPS_QoS_Subscribed: $.ComponentSpec[] = [
    new $.ComponentSpec("qos-Class-Identifier", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("allocation-Retention-Priority", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EPS_QoS_Subscribed
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPS_QoS_Subscribed: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPS_QoS_Subscribed
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPS_QoS_Subscribed: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPS_QoS_Subscribed: $.ASN1Decoder<EPS_QoS_Subscribed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPS_QoS_Subscribed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPS_QoS_Subscribed (el: _Element): EPS_QoS_Subscribed {
    if (!_cached_decoder_for_EPS_QoS_Subscribed) { _cached_decoder_for_EPS_QoS_Subscribed = function (el: _Element): EPS_QoS_Subscribed {
    let qos_Class_Identifier!: QoS_Class_Identifier;
    let allocation_Retention_Priority!: Allocation_Retention_Priority;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "qos-Class-Identifier": (_el: _Element): void => { qos_Class_Identifier = $._decode_implicit<QoS_Class_Identifier>(() => _decode_QoS_Class_Identifier)(_el); },
        "allocation-Retention-Priority": (_el: _Element): void => { allocation_Retention_Priority = $._decode_implicit<Allocation_Retention_Priority>(() => _decode_Allocation_Retention_Priority)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPS_QoS_Subscribed,
        _extension_additions_list_spec_for_EPS_QoS_Subscribed,
        _root_component_type_list_2_spec_for_EPS_QoS_Subscribed,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPS_QoS_Subscribed(
        qos_Class_Identifier,
        allocation_Retention_Priority,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPS_QoS_Subscribed(el);
}

let _cached_encoder_for_EPS_QoS_Subscribed: $.ASN1Encoder<EPS_QoS_Subscribed> | null = null;

/**
 * @summary Encodes a(n) EPS_QoS_Subscribed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPS_QoS_Subscribed, encoded as an ASN.1 Element.
 */
export
function _encode_EPS_QoS_Subscribed (value: EPS_QoS_Subscribed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPS_QoS_Subscribed) { _cached_encoder_for_EPS_QoS_Subscribed = function (value: EPS_QoS_Subscribed, elGetter: $.ASN1Encoder<EPS_QoS_Subscribed>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_QoS_Class_Identifier, $.BER)(value.qos_Class_Identifier, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Allocation_Retention_Priority, $.BER)(value.allocation_Retention_Priority, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPS_QoS_Subscribed(value, elGetter);
}


/* eslint-enable */

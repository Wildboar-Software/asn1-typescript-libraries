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
import { O_BcsmTriggerDetectionPoint, _enum_for_O_BcsmTriggerDetectionPoint, O_BcsmTriggerDetectionPoint_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, O_BcsmTriggerDetectionPoint_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_O_BcsmTriggerDetectionPoint, _encode_O_BcsmTriggerDetectionPoint } from "../MAP-MS-DataTypes/O-BcsmTriggerDetectionPoint.ta.mjs";
import { DestinationNumberCriteria, _decode_DestinationNumberCriteria, _encode_DestinationNumberCriteria } from "../MAP-MS-DataTypes/DestinationNumberCriteria.ta.mjs";
import { BasicServiceCriteria, _decode_BasicServiceCriteria, _encode_BasicServiceCriteria } from "../MAP-MS-DataTypes/BasicServiceCriteria.ta.mjs";
import { CallTypeCriteria, _enum_for_CallTypeCriteria, CallTypeCriteria_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallTypeCriteria_notForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, notForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CallTypeCriteria, _encode_CallTypeCriteria } from "../MAP-MS-DataTypes/CallTypeCriteria.ta.mjs";
import { O_CauseValueCriteria, _decode_O_CauseValueCriteria, _encode_O_CauseValueCriteria } from "../MAP-MS-DataTypes/O-CauseValueCriteria.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary O_BcsmCamelTDP_Criteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * O-BcsmCamelTDP-Criteria ::= SEQUENCE {
 *     o-BcsmTriggerDetectionPoint    O-BcsmTriggerDetectionPoint,    
 *     destinationNumberCriteria    [0] DestinationNumberCriteria    OPTIONAL,
 *     basicServiceCriteria    [1] BasicServiceCriteria    OPTIONAL,
 *     callTypeCriteria    [2] CallTypeCriteria    OPTIONAL,
 *     ...,
 *     o-CauseValueCriteria    [3] O-CauseValueCriteria    OPTIONAL,
 *     extensionContainer    [4] ExtensionContainer    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class O_BcsmCamelTDP_Criteria {
    constructor (
        /**
         * @summary `o_BcsmTriggerDetectionPoint`.
         * @public
         * @readonly
         */
        readonly o_BcsmTriggerDetectionPoint: O_BcsmTriggerDetectionPoint,
        /**
         * @summary `destinationNumberCriteria`.
         * @public
         * @readonly
         */
        readonly destinationNumberCriteria: OPTIONAL<DestinationNumberCriteria>,
        /**
         * @summary `basicServiceCriteria`.
         * @public
         * @readonly
         */
        readonly basicServiceCriteria: OPTIONAL<BasicServiceCriteria>,
        /**
         * @summary `callTypeCriteria`.
         * @public
         * @readonly
         */
        readonly callTypeCriteria: OPTIONAL<CallTypeCriteria>,
        /**
         * @summary `o_CauseValueCriteria`.
         * @public
         * @readonly
         */
        readonly o_CauseValueCriteria: OPTIONAL<O_CauseValueCriteria>,
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
     * @summary Restructures an object into a O_BcsmCamelTDP_Criteria
     * @description
     * 
     * This takes an `object` and converts it to a `O_BcsmCamelTDP_Criteria`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `O_BcsmCamelTDP_Criteria`.
     * @returns {O_BcsmCamelTDP_Criteria}
     */
    public static _from_object (_o: { [_K in keyof (O_BcsmCamelTDP_Criteria)]: (O_BcsmCamelTDP_Criteria)[_K] }): O_BcsmCamelTDP_Criteria {
        return new O_BcsmCamelTDP_Criteria(_o.o_BcsmTriggerDetectionPoint, _o.destinationNumberCriteria, _o.basicServiceCriteria, _o.callTypeCriteria, _o.o_CauseValueCriteria, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `o_BcsmTriggerDetectionPoint`
         * @public
         * @static
         */

    public static _enum_for_o_BcsmTriggerDetectionPoint = _enum_for_O_BcsmTriggerDetectionPoint;        /**
         * @summary The enum used as the type of the component `callTypeCriteria`
         * @public
         * @static
         */

    public static _enum_for_callTypeCriteria = _enum_for_CallTypeCriteria;
}

/**
 * @summary The Leading Root Component Types of O_BcsmCamelTDP_Criteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_O_BcsmCamelTDP_Criteria: $.ComponentSpec[] = [
    new $.ComponentSpec("o-BcsmTriggerDetectionPoint", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("destinationNumberCriteria", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("basicServiceCriteria", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callTypeCriteria", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of O_BcsmCamelTDP_Criteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_O_BcsmCamelTDP_Criteria: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of O_BcsmCamelTDP_Criteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_O_BcsmCamelTDP_Criteria: $.ComponentSpec[] = [
    new $.ComponentSpec("o-CauseValueCriteria", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_O_BcsmCamelTDP_Criteria: $.ASN1Decoder<O_BcsmCamelTDP_Criteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) O_BcsmCamelTDP_Criteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_O_BcsmCamelTDP_Criteria (el: _Element): O_BcsmCamelTDP_Criteria {
    if (!_cached_decoder_for_O_BcsmCamelTDP_Criteria) { _cached_decoder_for_O_BcsmCamelTDP_Criteria = function (el: _Element): O_BcsmCamelTDP_Criteria {
    let o_BcsmTriggerDetectionPoint!: O_BcsmTriggerDetectionPoint;
    let destinationNumberCriteria: OPTIONAL<DestinationNumberCriteria> = undefined;
    let basicServiceCriteria: OPTIONAL<BasicServiceCriteria> = undefined;
    let callTypeCriteria: OPTIONAL<CallTypeCriteria> = undefined;
    let o_CauseValueCriteria: OPTIONAL<O_CauseValueCriteria> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "o-BcsmTriggerDetectionPoint": (_el: _Element): void => { o_BcsmTriggerDetectionPoint = _decode_O_BcsmTriggerDetectionPoint(_el); },
        "destinationNumberCriteria": (_el: _Element): void => { destinationNumberCriteria = $._decode_implicit<DestinationNumberCriteria>(() => _decode_DestinationNumberCriteria)(_el); },
        "basicServiceCriteria": (_el: _Element): void => { basicServiceCriteria = $._decode_implicit<BasicServiceCriteria>(() => _decode_BasicServiceCriteria)(_el); },
        "callTypeCriteria": (_el: _Element): void => { callTypeCriteria = $._decode_implicit<CallTypeCriteria>(() => _decode_CallTypeCriteria)(_el); },
        "o-CauseValueCriteria": (_el: _Element): void => { o_CauseValueCriteria = $._decode_implicit<O_CauseValueCriteria>(() => _decode_O_CauseValueCriteria)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_O_BcsmCamelTDP_Criteria,
        _extension_additions_list_spec_for_O_BcsmCamelTDP_Criteria,
        _root_component_type_list_2_spec_for_O_BcsmCamelTDP_Criteria,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new O_BcsmCamelTDP_Criteria(
        o_BcsmTriggerDetectionPoint,
        destinationNumberCriteria,
        basicServiceCriteria,
        callTypeCriteria,
        o_CauseValueCriteria,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_O_BcsmCamelTDP_Criteria(el);
}

let _cached_encoder_for_O_BcsmCamelTDP_Criteria: $.ASN1Encoder<O_BcsmCamelTDP_Criteria> | null = null;

/**
 * @summary Encodes a(n) O_BcsmCamelTDP_Criteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The O_BcsmCamelTDP_Criteria, encoded as an ASN.1 Element.
 */
export
function _encode_O_BcsmCamelTDP_Criteria (value: O_BcsmCamelTDP_Criteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_O_BcsmCamelTDP_Criteria) { _cached_encoder_for_O_BcsmCamelTDP_Criteria = function (value: O_BcsmCamelTDP_Criteria, elGetter: $.ASN1Encoder<O_BcsmCamelTDP_Criteria>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_O_BcsmTriggerDetectionPoint(value.o_BcsmTriggerDetectionPoint, $.BER),
            /* IF_ABSENT  */ ((value.destinationNumberCriteria === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DestinationNumberCriteria, $.BER)(value.destinationNumberCriteria, $.BER)),
            /* IF_ABSENT  */ ((value.basicServiceCriteria === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_BasicServiceCriteria, $.BER)(value.basicServiceCriteria, $.BER)),
            /* IF_ABSENT  */ ((value.callTypeCriteria === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CallTypeCriteria, $.BER)(value.callTypeCriteria, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.o_CauseValueCriteria === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_O_CauseValueCriteria, $.BER)(value.o_CauseValueCriteria, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_O_BcsmCamelTDP_Criteria(value, elGetter);
}


/* eslint-enable */

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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    LinkConnectionList,
    _decode_LinkConnectionList,
    _encode_LinkConnectionList,
} from '../M3100ASN1TypeModule2/LinkConnectionList.ta.mjs';
export {
    LinkConnectionList,
    _decode_LinkConnectionList,
    _encode_LinkConnectionList,
} from '../M3100ASN1TypeModule2/LinkConnectionList.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AssignLinkConnectionOnLogicalLinkInformation */
/**
 * @summary AssignLinkConnectionOnLogicalLinkInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssignLinkConnectionOnLogicalLinkInformation ::= SEQUENCE {
 *   layerNetworkDomain        ObjectInstance,
 *   requestedLinkConnections  LinkConnectionList
 * }
 * ```
 *
 * @class
 */
export class AssignLinkConnectionOnLogicalLinkInformation {
    constructor(
        /**
         * @summary `layerNetworkDomain`.
         * @public
         * @readonly
         */
        readonly layerNetworkDomain: ObjectInstance,
        /**
         * @summary `requestedLinkConnections`.
         * @public
         * @readonly
         */
        readonly requestedLinkConnections: LinkConnectionList
    ) {}

    /**
     * @summary Restructures an object into a AssignLinkConnectionOnLogicalLinkInformation
     * @description
     *
     * This takes an `object` and converts it to a `AssignLinkConnectionOnLogicalLinkInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AssignLinkConnectionOnLogicalLinkInformation`.
     * @returns {AssignLinkConnectionOnLogicalLinkInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof AssignLinkConnectionOnLogicalLinkInformation]: AssignLinkConnectionOnLogicalLinkInformation[_K];
        }
    ): AssignLinkConnectionOnLogicalLinkInformation {
        return new AssignLinkConnectionOnLogicalLinkInformation(
            _o.layerNetworkDomain,
            _o.requestedLinkConnections
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AssignLinkConnectionOnLogicalLinkInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AssignLinkConnectionOnLogicalLinkInformation */
/**
 * @summary The Leading Root Component Types of AssignLinkConnectionOnLogicalLinkInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AssignLinkConnectionOnLogicalLinkInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'layerNetworkDomain',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'requestedLinkConnections',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AssignLinkConnectionOnLogicalLinkInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AssignLinkConnectionOnLogicalLinkInformation */
/**
 * @summary The Trailing Root Component Types of AssignLinkConnectionOnLogicalLinkInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AssignLinkConnectionOnLogicalLinkInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AssignLinkConnectionOnLogicalLinkInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AssignLinkConnectionOnLogicalLinkInformation */
/**
 * @summary The Extension Addition Component Types of AssignLinkConnectionOnLogicalLinkInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AssignLinkConnectionOnLogicalLinkInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AssignLinkConnectionOnLogicalLinkInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssignLinkConnectionOnLogicalLinkInformation */
let _cached_decoder_for_AssignLinkConnectionOnLogicalLinkInformation: $.ASN1Decoder<AssignLinkConnectionOnLogicalLinkInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssignLinkConnectionOnLogicalLinkInformation */

/* START_OF_SYMBOL_DEFINITION _decode_AssignLinkConnectionOnLogicalLinkInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) AssignLinkConnectionOnLogicalLinkInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssignLinkConnectionOnLogicalLinkInformation} The decoded data structure.
 */
export function _decode_AssignLinkConnectionOnLogicalLinkInformation(
    el: _Element
) {
    if (!_cached_decoder_for_AssignLinkConnectionOnLogicalLinkInformation) {
        _cached_decoder_for_AssignLinkConnectionOnLogicalLinkInformation = function (
            el: _Element
        ): AssignLinkConnectionOnLogicalLinkInformation {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'AssignLinkConnectionOnLogicalLinkInformation contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'layerNetworkDomain';
            sequence[1].name = 'requestedLinkConnections';
            let layerNetworkDomain!: ObjectInstance;
            let requestedLinkConnections!: LinkConnectionList;
            layerNetworkDomain = _decode_ObjectInstance(sequence[0]);
            requestedLinkConnections = _decode_LinkConnectionList(sequence[1]);
            return new AssignLinkConnectionOnLogicalLinkInformation(
                layerNetworkDomain,
                requestedLinkConnections
            );
        };
    }
    return _cached_decoder_for_AssignLinkConnectionOnLogicalLinkInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssignLinkConnectionOnLogicalLinkInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssignLinkConnectionOnLogicalLinkInformation */
let _cached_encoder_for_AssignLinkConnectionOnLogicalLinkInformation: $.ASN1Encoder<AssignLinkConnectionOnLogicalLinkInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssignLinkConnectionOnLogicalLinkInformation */

/* START_OF_SYMBOL_DEFINITION _encode_AssignLinkConnectionOnLogicalLinkInformation */
/**
 * @summary Encodes a(n) AssignLinkConnectionOnLogicalLinkInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssignLinkConnectionOnLogicalLinkInformation, encoded as an ASN.1 Element.
 */
export function _encode_AssignLinkConnectionOnLogicalLinkInformation(
    value: AssignLinkConnectionOnLogicalLinkInformation,
    elGetter: $.ASN1Encoder<AssignLinkConnectionOnLogicalLinkInformation>
) {
    if (!_cached_encoder_for_AssignLinkConnectionOnLogicalLinkInformation) {
        _cached_encoder_for_AssignLinkConnectionOnLogicalLinkInformation = function (
            value: AssignLinkConnectionOnLogicalLinkInformation,
            elGetter: $.ASN1Encoder<AssignLinkConnectionOnLogicalLinkInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.layerNetworkDomain,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_LinkConnectionList(
                            value.requestedLinkConnections,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AssignLinkConnectionOnLogicalLinkInformation(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AssignLinkConnectionOnLogicalLinkInformation */

/* eslint-enable */

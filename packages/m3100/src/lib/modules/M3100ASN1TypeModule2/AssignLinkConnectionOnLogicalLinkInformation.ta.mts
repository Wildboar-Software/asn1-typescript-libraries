/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
import {
    LinkConnectionList,
    _decode_LinkConnectionList,
    _encode_LinkConnectionList,
} from '../M3100ASN1TypeModule2/LinkConnectionList.ta.mjs';

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
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'requestedLinkConnections',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of AssignLinkConnectionOnLogicalLinkInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AssignLinkConnectionOnLogicalLinkInformation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AssignLinkConnectionOnLogicalLinkInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AssignLinkConnectionOnLogicalLinkInformation: $.ComponentSpec[] = [];


let _cached_decoder_for_AssignLinkConnectionOnLogicalLinkInformation: $.ASN1Decoder<AssignLinkConnectionOnLogicalLinkInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AssignLinkConnectionOnLogicalLinkInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssignLinkConnectionOnLogicalLinkInformation} The decoded data structure.
 */
export function _decode_AssignLinkConnectionOnLogicalLinkInformation(
    el: _Element
): AssignLinkConnectionOnLogicalLinkInformation {
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


let _cached_encoder_for_AssignLinkConnectionOnLogicalLinkInformation: $.ASN1Encoder<AssignLinkConnectionOnLogicalLinkInformation> | null = null;


/**
 * @summary Encodes a(n) AssignLinkConnectionOnLogicalLinkInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssignLinkConnectionOnLogicalLinkInformation, encoded as an ASN.1 Element.
 */
export function _encode_AssignLinkConnectionOnLogicalLinkInformation(
    value: AssignLinkConnectionOnLogicalLinkInformation,
    elGetter: $.ASN1Encoder<AssignLinkConnectionOnLogicalLinkInformation>
): _Element {
    if (!_cached_encoder_for_AssignLinkConnectionOnLogicalLinkInformation) {
        _cached_encoder_for_AssignLinkConnectionOnLogicalLinkInformation = function (
            value: AssignLinkConnectionOnLogicalLinkInformation        ): _Element {
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


/* eslint-enable */

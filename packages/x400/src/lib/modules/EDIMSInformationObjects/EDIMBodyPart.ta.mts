/* eslint-disable */
import {
    OPTIONAL,
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
    MessageParameters,
    _decode_MessageParameters,
    _encode_MessageParameters,
} from '../EDIMSInformationObjects/MessageParameters.ta.mjs';
import {
    MessageData,
    _decode_MessageData,
    _encode_MessageData,
} from '../EDIMSInformationObjects/MessageData.ta.mjs';
/**
 * @summary EDIMBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMBodyPart ::= SEQUENCE {
 *   parameters  [0]  MessageParameters OPTIONAL,
 *   data        [1]  MessageData
 * }
 * ```
 *
 * @class
 */
export class EDIMBodyPart {
    constructor(
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<MessageParameters>,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: MessageData
    ) {}

    /**
     * @summary Restructures an object into a EDIMBodyPart
     * @description
     *
     * This takes an `object` and converts it to a `EDIMBodyPart`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDIMBodyPart`.
     * @returns {EDIMBodyPart}
     */
    public static _from_object(
        _o: { [_K in keyof EDIMBodyPart]: EDIMBodyPart[_K] }
    ): EDIMBodyPart {
        return new EDIMBodyPart(_o.parameters, _o.data);
    }
}

/**
 * @summary The Leading Root Component Types of EDIMBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDIMBodyPart: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'parameters',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'data',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of EDIMBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIMBodyPart: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EDIMBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDIMBodyPart: $.ComponentSpec[] = [];

let _cached_decoder_for_EDIMBodyPart: $.ASN1Decoder<EDIMBodyPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDIMBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIMBodyPart} The decoded data structure.
 */
export function _decode_EDIMBodyPart(el: _Element) {
    if (!_cached_decoder_for_EDIMBodyPart) {
        _cached_decoder_for_EDIMBodyPart = function (
            el: _Element
        ): EDIMBodyPart {
            let parameters: OPTIONAL<MessageParameters>;
            let data!: MessageData;
            const callbacks: $.DecodingMap = {
                parameters: (_el: _Element): void => {
                    parameters = $._decode_implicit<MessageParameters>(
                        () => _decode_MessageParameters
                    )(_el);
                },
                data: (_el: _Element): void => {
                    data = $._decode_implicit<MessageData>(
                        () => _decode_MessageData
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDIMBodyPart,
                _extension_additions_list_spec_for_EDIMBodyPart,
                _root_component_type_list_2_spec_for_EDIMBodyPart,
                undefined
            );
            return new EDIMBodyPart (
                parameters,
                data
            );
        };
    }
    return _cached_decoder_for_EDIMBodyPart(el);
}

let _cached_encoder_for_EDIMBodyPart: $.ASN1Encoder<EDIMBodyPart> | null = null;

/**
 * @summary Encodes a(n) EDIMBodyPart into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIMBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_EDIMBodyPart(
    value: EDIMBodyPart,
    elGetter: $.ASN1Encoder<EDIMBodyPart>
) {
    if (!_cached_encoder_for_EDIMBodyPart) {
        _cached_encoder_for_EDIMBodyPart = function (
            value: EDIMBodyPart        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.parameters === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_MessageParameters,
                                  $.BER
                              )(value.parameters, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_MessageData,
                            $.BER
                        )(value.data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EDIMBodyPart(value, elGetter);
}


/* eslint-enable */

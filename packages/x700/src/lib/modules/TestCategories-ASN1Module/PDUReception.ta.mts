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
    PDUType,
    _decode_PDUType,
    _encode_PDUType,
} from '../TestCategories-ASN1Module/PDUType.ta.mjs';
import {
    Parameter,
    _decode_Parameter,
    _encode_Parameter,
} from '../TestCategories-ASN1Module/Parameter.ta.mjs';
import {
    ResponseTimeout,
    _decode_ResponseTimeout,
    _encode_ResponseTimeout,
} from '../TestCategories-ASN1Module/ResponseTimeout.ta.mjs';
/**
 * @summary PDUReception
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDUReception ::= SEQUENCE {
 *   pDUType          PDUType,
 *   parameter        Parameter,
 *   responseTimeout  ResponseTimeout OPTIONAL
 * }
 * ```
 *
 */
export class PDUReception {
    constructor(
        /**
         * @summary `pDUType`.
         * @public
         * @readonly
         */
        readonly pDUType: PDUType,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: Parameter,
        /**
         * @summary `responseTimeout`.
         * @public
         * @readonly
         */
        readonly responseTimeout: OPTIONAL<ResponseTimeout>
    ) {}

    /**
     * @summary Restructures an object into a PDUReception
     * @description
     *
     * This takes an `object` and converts it to a `PDUReception`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDUReception`.
     * @returns {PDUReception}
     */
    public static _from_object(
        _o: { [_K in keyof PDUReception]: PDUReception[_K] }
    ): PDUReception {
        return new PDUReception(_o.pDUType, _o.parameter, _o.responseTimeout);
    }
}

/**
 * @summary The Leading Root Component Types of PDUReception
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PDUReception: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'pDUType',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'parameter',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'responseTimeout',
        true,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of PDUReception
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PDUReception: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PDUReception
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PDUReception: $.ComponentSpec[] = [];

let _cached_decoder_for_PDUReception: $.ASN1Decoder<PDUReception> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDUReception
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDUReception} The decoded data structure.
 */
export function _decode_PDUReception(el: _Element): PDUReception {
    if (!_cached_decoder_for_PDUReception) {
        _cached_decoder_for_PDUReception = function (
            el: _Element
        ): PDUReception {
            let pDUType!: PDUType;
            let parameter!: Parameter;
            let responseTimeout: OPTIONAL<ResponseTimeout>;
            const callbacks: $.DecodingMap = {
                pDUType: (_el: _Element): void => {
                    pDUType = _decode_PDUType(_el);
                },
                parameter: (_el: _Element): void => {
                    parameter = _decode_Parameter(_el);
                },
                responseTimeout: (_el: _Element): void => {
                    responseTimeout = _decode_ResponseTimeout(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PDUReception,
                _extension_additions_list_spec_for_PDUReception,
                _root_component_type_list_2_spec_for_PDUReception,
                undefined
            );
            return new PDUReception (
                pDUType,
                parameter,
                responseTimeout
            );
        };
    }
    return _cached_decoder_for_PDUReception(el);
}

let _cached_encoder_for_PDUReception: $.ASN1Encoder<PDUReception> | null = null;

/**
 * @summary Encodes a(n) PDUReception into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUReception, encoded as an ASN.1 Element.
 */
export function _encode_PDUReception(
    value: PDUReception,
    elGetter: $.ASN1Encoder<PDUReception>
): _Element {
    if (!_cached_encoder_for_PDUReception) {
        _cached_encoder_for_PDUReception = function (
            value: PDUReception        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PDUType(value.pDUType, $.BER),
                        /* REQUIRED   */ _encode_Parameter(
                            value.parameter,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.responseTimeout === undefined
                            ? undefined
                            : _encode_ResponseTimeout(
                                  value.responseTimeout,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PDUReception(value, elGetter);
}


/* eslint-enable */

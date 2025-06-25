/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AvlSerialNumber,
    _decode_AvlSerialNumber,
    _encode_AvlSerialNumber,
} from "../AuthenticationFramework/AvlSerialNumber.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary AvlId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AvlId ::= SEQUENCE {
 *   issuer        Name,
 *   serialNumber  AvlSerialNumber OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AvlId {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: OPTIONAL<AvlSerialNumber>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AvlId
     * @description
     *
     * This takes an `object` and converts it to a `AvlId`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AvlId`.
     * @returns {AvlId}
     */
    public static _from_object(_o: { [_K in keyof AvlId]: AvlId[_K] }): AvlId {
        return new AvlId(
            _o.issuer,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of AvlId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AvlId: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", false, $.hasAnyTag),
    new $.ComponentSpec(
        "serialNumber",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of AvlId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AvlId: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AvlId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AvlId: $.ComponentSpec[] = [];

let _cached_decoder_for_AvlId: $.ASN1Decoder<AvlId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AvlId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AvlId} The decoded data structure.
 */
export function _decode_AvlId(el: _Element): AvlId {
    if (!_cached_decoder_for_AvlId) {
        _cached_decoder_for_AvlId = function (el: _Element): AvlId {
            let issuer!: Name;
            let serialNumber: OPTIONAL<AvlSerialNumber>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                serialNumber: (_el: _Element): void => {
                    serialNumber = _decode_AvlSerialNumber(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AvlId,
                _extension_additions_list_spec_for_AvlId,
                _root_component_type_list_2_spec_for_AvlId,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AvlId(
                issuer,
                serialNumber,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AvlId(el);
}

let _cached_encoder_for_AvlId: $.ASN1Encoder<AvlId> | null = null;

/**
 * @summary Encodes a(n) AvlId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvlId, encoded as an ASN.1 Element.
 */
export function _encode_AvlId(value: AvlId, elGetter: $.ASN1Encoder<AvlId>): _Element {
    if (!_cached_encoder_for_AvlId) {
        _cached_encoder_for_AvlId = function (
            value: AvlId        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.issuer, $.DER),
                            /* IF_ABSENT  */ value.serialNumber === undefined
                                ? undefined
                                : _encode_AvlSerialNumber(
                                      value.serialNumber,
                                      $.DER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_AvlId(value, elGetter);
}


/* eslint-enable */

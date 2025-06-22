/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    UUID,
    _decode_UUID,
    _encode_UUID,
} from "../SelectedAttributeTypes/UUID.ta.mjs";
/**
 * @summary UUIDPair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UUIDPair ::= SEQUENCE {
 *   issuerUUID   UUID,
 *   subjectUUID  UUID,
 *   ... }
 * ```
 *
 * @class
 */
export class UUIDPair {
    constructor(
        /**
         * @summary `issuerUUID`.
         * @public
         * @readonly
         */
        readonly issuerUUID: UUID,
        /**
         * @summary `subjectUUID`.
         * @public
         * @readonly
         */
        readonly subjectUUID: UUID,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UUIDPair
     * @description
     *
     * This takes an `object` and converts it to a `UUIDPair`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UUIDPair`.
     * @returns {UUIDPair}
     */
    public static _from_object(
        _o: { [_K in keyof UUIDPair]: UUIDPair[_K] }
    ): UUIDPair {
        return new UUIDPair(
            _o.issuerUUID,
            _o.subjectUUID,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of UUIDPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UUIDPair: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuerUUID",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "subjectUUID",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of UUIDPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UUIDPair: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UUIDPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UUIDPair: $.ComponentSpec[] = [];

let _cached_decoder_for_UUIDPair: $.ASN1Decoder<UUIDPair> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UUIDPair
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UUIDPair} The decoded data structure.
 */
export function _decode_UUIDPair(el: _Element) {
    if (!_cached_decoder_for_UUIDPair) {
        _cached_decoder_for_UUIDPair = function (el: _Element): UUIDPair {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "UUIDPair contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "issuerUUID";
            sequence[1].name = "subjectUUID";
            let issuerUUID!: UUID;
            let subjectUUID!: UUID;
            issuerUUID = _decode_UUID(sequence[0]);
            subjectUUID = _decode_UUID(sequence[1]);
            return new UUIDPair(issuerUUID, subjectUUID, sequence.slice(2));
        };
    }
    return _cached_decoder_for_UUIDPair(el);
}

let _cached_encoder_for_UUIDPair: $.ASN1Encoder<UUIDPair> | null = null;

/**
 * @summary Encodes a(n) UUIDPair into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UUIDPair, encoded as an ASN.1 Element.
 */
export function _encode_UUIDPair(
    value: UUIDPair,
    elGetter: $.ASN1Encoder<UUIDPair>
) {
    if (!_cached_encoder_for_UUIDPair) {
        _cached_encoder_for_UUIDPair = function (
            value: UUIDPair        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_UUID(
                                value.issuerUUID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_UUID(
                                value.subjectUUID,
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
    return _cached_encoder_for_UUIDPair(value, elGetter);
}


/* eslint-enable */

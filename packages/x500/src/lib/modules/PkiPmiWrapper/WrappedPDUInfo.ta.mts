/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary WrappedPDUInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WrappedPDUInfo ::= SEQUENCE {
 *   pduType      WRAPPED-PDU.&id ({SupportedPduSet}),
 *   pduInfo      WRAPPED-PDU.&Type ({SupportedPduSet}{@pduType}),
 *   ... }
 * ```
 *
 * @class
 */
export class WrappedPDUInfo {
    constructor(
        /**
         * @summary `pduType`.
         * @public
         * @readonly
         */
        readonly pduType: OBJECT_IDENTIFIER,
        /**
         * @summary `pduInfo`.
         * @public
         * @readonly
         */
        readonly pduInfo: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a WrappedPDUInfo
     * @description
     *
     * This takes an `object` and converts it to a `WrappedPDUInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WrappedPDUInfo`.
     * @returns {WrappedPDUInfo}
     */
    public static _from_object(
        _o: { [_K in keyof WrappedPDUInfo]: WrappedPDUInfo[_K] }
    ): WrappedPDUInfo {
        return new WrappedPDUInfo(
            _o.pduType,
            _o.pduInfo,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of WrappedPDUInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_WrappedPDUInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "pduType",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec("pduInfo", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of WrappedPDUInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_WrappedPDUInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of WrappedPDUInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_WrappedPDUInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_WrappedPDUInfo: $.ASN1Decoder<WrappedPDUInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WrappedPDUInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WrappedPDUInfo} The decoded data structure.
 */
export function _decode_WrappedPDUInfo(el: _Element): WrappedPDUInfo {
    if (!_cached_decoder_for_WrappedPDUInfo) {
        _cached_decoder_for_WrappedPDUInfo = function (
            el: _Element
        ): WrappedPDUInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "WrappedPDUInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "pduType";
            sequence[1].name = "pduInfo";
            let pduType!: OBJECT_IDENTIFIER;
            let pduInfo!: _Element;
            pduType = $._decodeObjectIdentifier(sequence[0]);
            pduInfo = $._decodeAny(sequence[1]);
            return new WrappedPDUInfo(pduType, pduInfo, sequence.slice(2));
        };
    }
    return _cached_decoder_for_WrappedPDUInfo(el);
}

let _cached_encoder_for_WrappedPDUInfo: $.ASN1Encoder<WrappedPDUInfo> | null = null;

/**
 * @summary Encodes a(n) WrappedPDUInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WrappedPDUInfo, encoded as an ASN.1 Element.
 */
export function _encode_WrappedPDUInfo(
    value: WrappedPDUInfo,
    elGetter: $.ASN1Encoder<WrappedPDUInfo>
): _Element {
    if (!_cached_encoder_for_WrappedPDUInfo) {
        _cached_encoder_for_WrappedPDUInfo = function (
            value: WrappedPDUInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.pduType,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeAny(value.pduInfo, $.DER),
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
    return _cached_encoder_for_WrappedPDUInfo(value, elGetter);
}


/* eslint-enable */

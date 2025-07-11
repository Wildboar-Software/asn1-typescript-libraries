/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CRLBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLBag ::= SEQUENCE {
 *     crlId     BAG-TYPE.&id ({CRLTypes}),
 *     crltValue [0] EXPLICIT BAG-TYPE.&Type ({CRLTypes}{@crlId})
 * }
 * ```
 *
 */
export class CRLBag {
    constructor(
        /**
         * @summary `crlId`.
         * @public
         * @readonly
         */
        readonly crlId: OBJECT_IDENTIFIER,
        /**
         * @summary `crltValue`.
         * @public
         * @readonly
         */
        readonly crltValue: _Element
    ) {}

    /**
     * @summary Restructures an object into a CRLBag
     * @description
     *
     * This takes an `object` and converts it to a `CRLBag`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CRLBag`.
     * @returns {CRLBag}
     */
    public static _from_object(
        _o: { [_K in keyof CRLBag]: CRLBag[_K] }
    ): CRLBag {
        return new CRLBag(_o.crlId, _o.crltValue);
    }
}


/**
 * @summary The Leading Root Component Types of CRLBag
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CRLBag: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "crlId",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "crltValue",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of CRLBag
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CRLBag: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CRLBag
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CRLBag: $.ComponentSpec[] = [];


let _cached_decoder_for_CRLBag: $.ASN1Decoder<CRLBag> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CRLBag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLBag} The decoded data structure.
 */
export function _decode_CRLBag(el: _Element): CRLBag {
    if (!_cached_decoder_for_CRLBag) {
        _cached_decoder_for_CRLBag = function (el: _Element): CRLBag {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CRLBag contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "crlId";
            sequence[1].name = "crltValue";
            let crlId!: OBJECT_IDENTIFIER;
            let crltValue!: _Element;
            crlId = $._decodeObjectIdentifier(sequence[0]);
            crltValue = $._decode_explicit<_Element>(() => $._decodeAny)(
                sequence[1]
            );
            return new CRLBag(crlId, crltValue);
        };
    }
    return _cached_decoder_for_CRLBag(el);
}


let _cached_encoder_for_CRLBag: $.ASN1Encoder<CRLBag> | null = null;


/**
 * @summary Encodes a(n) CRLBag into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLBag, encoded as an ASN.1 Element.
 */
export function _encode_CRLBag(value: CRLBag, elGetter: $.ASN1Encoder<CRLBag>): _Element {
    if (!_cached_encoder_for_CRLBag) {
        _cached_encoder_for_CRLBag = function (
            value: CRLBag        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.crlId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeAny,
                            $.BER
                        )(value.crltValue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CRLBag(value, elGetter);
}


/* eslint-enable */

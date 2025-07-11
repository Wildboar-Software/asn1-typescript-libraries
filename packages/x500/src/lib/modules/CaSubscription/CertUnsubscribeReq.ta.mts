/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertUnsubscribeReq_certs_Item,
    _decode_CertUnsubscribeReq_certs_Item,
    _encode_CertUnsubscribeReq_certs_Item,
} from "../CaSubscription/CertUnsubscribeReq-certs-Item.ta.mjs";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta.mjs";
/**
 * @summary CertUnsubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeReq ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   certs  SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     subject      Name,
 *     serialNumber CertificateSerialNumber,
 *     ... },
 *   ... }
 * ```
 *
 */
export class CertUnsubscribeReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: CertUnsubscribeReq_certs_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeReq
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeReq`.
     * @returns {CertUnsubscribeReq}
     */
    public static _from_object(
        _o: { [_K in keyof CertUnsubscribeReq]: CertUnsubscribeReq[_K] }
    ): CertUnsubscribeReq {
        return new CertUnsubscribeReq(
            _o.invokeID,
            _o.certs,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertUnsubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "certs",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertUnsubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeReq: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertUnsubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeReq: $.ComponentSpec[] = [];

let _cached_decoder_for_CertUnsubscribeReq: $.ASN1Decoder<CertUnsubscribeReq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeReq} The decoded data structure.
 */
export function _decode_CertUnsubscribeReq(el: _Element): CertUnsubscribeReq {
    if (!_cached_decoder_for_CertUnsubscribeReq) {
        _cached_decoder_for_CertUnsubscribeReq = function (
            el: _Element
        ): CertUnsubscribeReq {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUnsubscribeReq contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "certs";
            let invokeID!: InvokeID;
            let certs!: CertUnsubscribeReq_certs_Item[];
            invokeID = _decode_InvokeID(sequence[0]);
            certs = $._decodeSequenceOf<CertUnsubscribeReq_certs_Item>(
                () => _decode_CertUnsubscribeReq_certs_Item
            )(sequence[1]);
            return new CertUnsubscribeReq(invokeID, certs, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertUnsubscribeReq(el);
}

let _cached_encoder_for_CertUnsubscribeReq: $.ASN1Encoder<CertUnsubscribeReq> | null = null;

/**
 * @summary Encodes a(n) CertUnsubscribeReq into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeReq, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeReq(
    value: CertUnsubscribeReq,
    elGetter: $.ASN1Encoder<CertUnsubscribeReq>
): _Element {
    if (!_cached_encoder_for_CertUnsubscribeReq) {
        _cached_encoder_for_CertUnsubscribeReq = function (
            value: CertUnsubscribeReq        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<CertUnsubscribeReq_certs_Item>(
                                () => _encode_CertUnsubscribeReq_certs_Item,
                                $.DER
                            )(value.certs, $.DER),
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
    return _cached_encoder_for_CertUnsubscribeReq(value, elGetter);
}


/* eslint-enable */

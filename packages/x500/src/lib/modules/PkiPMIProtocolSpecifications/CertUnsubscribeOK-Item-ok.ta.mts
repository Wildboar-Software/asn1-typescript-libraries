/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary CertUnsubscribeOK_Item_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeOK-Item-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class CertUnsubscribeOK_Item_ok {
    constructor(
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeOK_Item_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeOK_Item_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeOK_Item_ok`.
     * @returns {CertUnsubscribeOK_Item_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertUnsubscribeOK_Item_ok]: CertUnsubscribeOK_Item_ok[_K];
            }
        >
    ): CertUnsubscribeOK_Item_ok {
        return new CertUnsubscribeOK_Item_ok(
            _o.subject,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertUnsubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeOK_Item_ok: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", false, $.hasAnyTag),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertUnsubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeOK_Item_ok: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertUnsubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeOK_Item_ok: $.ComponentSpec[] = [];

let _cached_decoder_for_CertUnsubscribeOK_Item_ok: $.ASN1Decoder<CertUnsubscribeOK_Item_ok> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeOK_Item_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeOK_Item_ok} The decoded data structure.
 */
export function _decode_CertUnsubscribeOK_Item_ok(el: _Element): CertUnsubscribeOK_Item_ok {
    if (!_cached_decoder_for_CertUnsubscribeOK_Item_ok) {
        _cached_decoder_for_CertUnsubscribeOK_Item_ok = function (
            el: _Element
        ): CertUnsubscribeOK_Item_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUnsubscribeOK-Item-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            return new CertUnsubscribeOK_Item_ok(
                subject,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertUnsubscribeOK_Item_ok(el);
}

let _cached_encoder_for_CertUnsubscribeOK_Item_ok: $.ASN1Encoder<CertUnsubscribeOK_Item_ok> | null = null;

/**
 * @summary Encodes a(n) CertUnsubscribeOK_Item_ok into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeOK_Item_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeOK_Item_ok(
    value: CertUnsubscribeOK_Item_ok,
    elGetter: $.ASN1Encoder<CertUnsubscribeOK_Item_ok>
): _Element {
    if (!_cached_encoder_for_CertUnsubscribeOK_Item_ok) {
        _cached_encoder_for_CertUnsubscribeOK_Item_ok = function (
            value: CertUnsubscribeOK_Item_ok        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.subject, $.DER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
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
    return _cached_encoder_for_CertUnsubscribeOK_Item_ok(value, elGetter);
}


/* eslint-enable */

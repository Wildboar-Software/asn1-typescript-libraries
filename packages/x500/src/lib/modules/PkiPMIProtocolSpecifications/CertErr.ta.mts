/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertErr_notOK,
    _decode_CertErr_notOK,
    _encode_CertErr_notOK,
} from "../PkiPMIProtocolSpecifications/CertErr-notOK.ta.mjs";
import {
    Notifications,
    _decode_Notifications,
    _encode_Notifications,
} from "../PkiPMIProtocolSpecifications/Notifications.ta.mjs";
/**
 * @summary CertErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertErr ::= SEQUENCE {
 *   notOK  CHOICE {
 *     wrErr   [0]  PkiWaError,
 *     avmpErr [1]  AVMP-error,
 *     ... },
 *   note   Notifications OPTIONAL,
 *   ... }
 * ```
 *
 */
export class CertErr {
    constructor(
        /**
         * @summary `notOK`.
         * @public
         * @readonly
         */
        readonly notOK: CertErr_notOK,
        /**
         * @summary `note`.
         * @public
         * @readonly
         */
        readonly note: OPTIONAL<Notifications>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertErr
     * @description
     *
     * This takes an `object` and converts it to a `CertErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertErr`.
     * @returns {CertErr}
     */
    public static _from_object(
        _o: { [_K in keyof CertErr]: CertErr[_K] }
    ): CertErr {
        return new CertErr(_o.notOK, _o.note, _o._unrecognizedExtensionsList);
    }
}

/**
 * @summary The Leading Root Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertErr: $.ComponentSpec[] = [
    new $.ComponentSpec("notOK", false, $.hasAnyTag),
    new $.ComponentSpec(
        "note",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertErr: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertErr: $.ComponentSpec[] = [];

let _cached_decoder_for_CertErr: $.ASN1Decoder<CertErr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertErr} The decoded data structure.
 */
export function _decode_CertErr(el: _Element): CertErr {
    if (!_cached_decoder_for_CertErr) {
        _cached_decoder_for_CertErr = function (el: _Element): CertErr {
            let notOK!: CertErr_notOK;
            let note: OPTIONAL<Notifications>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                notOK: (_el: _Element): void => {
                    notOK = _decode_CertErr_notOK(_el);
                },
                note: (_el: _Element): void => {
                    note = _decode_Notifications(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertErr,
                _extension_additions_list_spec_for_CertErr,
                _root_component_type_list_2_spec_for_CertErr,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertErr(
                notOK,
                note,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertErr(el);
}

let _cached_encoder_for_CertErr: $.ASN1Encoder<CertErr> | null = null;

/**
 * @summary Encodes a(n) CertErr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertErr, encoded as an ASN.1 Element.
 */
export function _encode_CertErr(
    value: CertErr,
    elGetter: $.ASN1Encoder<CertErr>
): _Element {
    if (!_cached_encoder_for_CertErr) {
        _cached_encoder_for_CertErr = function (
            value: CertErr        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertErr_notOK(
                                value.notOK,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.note === undefined
                                ? undefined
                                : _encode_Notifications(value.note, $.DER),
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
    return _cached_encoder_for_CertErr(value, elGetter);
}


/* eslint-enable */

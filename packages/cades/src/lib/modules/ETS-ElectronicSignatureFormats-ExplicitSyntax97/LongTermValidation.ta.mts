/* eslint-disable */
import {
    OPTIONAL,
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LongTermValidation_poeValue, _decode_LongTermValidation_poeValue, _encode_LongTermValidation_poeValue } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/LongTermValidation-poeValue.ta.mjs";
import {
    CertificateSet,
    _decode_CertificateSet,
    _encode_CertificateSet,
    RevocationInfoChoices,
    _decode_RevocationInfoChoices,
    _encode_RevocationInfoChoices,
} from "@wildboar/cms";

/**
 * @summary LongTermValidation
 * @description
 * 
 * **WARNING**: This ASN.1 `SEQUENCE` is not valid, because the tagging for
 * `poeValue`, `extraCertificates`, and `extraRevocation` conflict with each other.
 * There is no erratum for this, as far as I know, but this data structure is
 * deprecated anyway.
 * 
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LongTermValidation ::= SEQUENCE {
 *     poeDate         GeneralizedTime,
 *     poeValue        CHOICE {
 *         timeStamp       [0] EXPLICIT TimeStampToken,
 *         evidenceRecord  [1] EXPLICIT EvidenceRecord
 *     } OPTIONAL,
 *     extraCertificates   [0] IMPLICIT CertificateSet OPTIONAL,
 *     extraRevocation     [1] IMPLICIT RevocationInfoChoices OPTIONAL }
 * ```
 *
 * @deprecated in ETSI TS 101 733 - V2.2.1 (or earlier) in Section 6.5.1.
 */
export
class LongTermValidation {
    constructor (
        /**
         * @summary `poeDate`.
         * @public
         * @readonly
         */
        readonly poeDate: GeneralizedTime,
        /**
         * @summary `poeValue`.
         * @public
         * @readonly
         */
        readonly poeValue: OPTIONAL<LongTermValidation_poeValue>,
        /**
         * @summary `extraCertificates`.
         * @public
         * @readonly
         */
        readonly extraCertificates: OPTIONAL<CertificateSet>,
        /**
         * @summary `extraRevocation`.
         * @public
         * @readonly
         */
        readonly extraRevocation: OPTIONAL<RevocationInfoChoices>
    ) {}

    /**
     * @summary Restructures an object into a LongTermValidation
     * @description
     *
     * This takes an `object` and converts it to a `LongTermValidation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LongTermValidation`.
     * @returns {LongTermValidation}
     */
    public static _from_object (_o: { [_K in keyof (LongTermValidation)]: (LongTermValidation)[_K] }): LongTermValidation {
        return new LongTermValidation(_o.poeDate, _o.poeValue, _o.extraCertificates, _o.extraRevocation);
    }


}

/**
 * @summary The Leading Root Component Types of LongTermValidation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LongTermValidation: $.ComponentSpec[] = [
    new $.ComponentSpec("poeDate", false, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("poeValue", true, $.or(
        $.hasTag(_TagClass.context, 0),
        $.hasTag(_TagClass.context, 1),
    )),
    new $.ComponentSpec("extraCertificates", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extraRevocation", true, $.hasTag(_TagClass.context, 1)),
];

/**
 * @summary The Trailing Root Component Types of LongTermValidation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LongTermValidation: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of LongTermValidation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_LongTermValidation: $.ComponentSpec[] = [

];

let _cached_decoder_for_LongTermValidation: $.ASN1Decoder<LongTermValidation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LongTermValidation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LongTermValidation} The decoded data structure.
 */
export
function _decode_LongTermValidation (el: _Element): LongTermValidation {
    if (!_cached_decoder_for_LongTermValidation) { _cached_decoder_for_LongTermValidation = function (el: _Element): LongTermValidation {
    let poeDate!: GeneralizedTime;
    let poeValue: OPTIONAL<LongTermValidation_poeValue>;
    let extraCertificates: OPTIONAL<CertificateSet>;
    let extraRevocation: OPTIONAL<RevocationInfoChoices>;
    const callbacks: $.DecodingMap = {
        "poeDate": (_el: _Element): void => {
            poeDate = $._decodeGeneralizedTime(_el);
        },
        "poeValue": (_el: _Element): void => {
            try {
                poeValue = _decode_LongTermValidation_poeValue(_el);
            } catch {
                if (_el.tagNumber === 0) {
                    extraCertificates = $._decode_implicit<CertificateSet>(() => _decode_CertificateSet)(_el);
                } else if (_el.tagNumber === 1) {
                    extraRevocation = $._decode_implicit<RevocationInfoChoices>(() => _decode_RevocationInfoChoices)(_el);
                }
            }
        },
        "extraCertificates": (_el: _Element): void => {
            extraCertificates = $._decode_implicit<CertificateSet>(() => _decode_CertificateSet)(_el);
        },
        "extraRevocation": (_el: _Element): void => {
            extraRevocation = $._decode_implicit<RevocationInfoChoices>(() => _decode_RevocationInfoChoices)(_el);
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LongTermValidation,
        _extension_additions_list_spec_for_LongTermValidation,
        _root_component_type_list_2_spec_for_LongTermValidation,
        undefined,
    );
    return new LongTermValidation( 
        poeDate,
        poeValue,
        extraCertificates,
        extraRevocation
    );
}; }
    return _cached_decoder_for_LongTermValidation(el);
}

let _cached_encoder_for_LongTermValidation: $.ASN1Encoder<LongTermValidation> | null = null;

/**
 * @summary Encodes a(n) LongTermValidation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LongTermValidation, encoded as an ASN.1 Element.
 */
export
function _encode_LongTermValidation (value: LongTermValidation, elGetter: $.ASN1Encoder<LongTermValidation>): _Element {
    if (!_cached_encoder_for_LongTermValidation) { _cached_encoder_for_LongTermValidation = function (value: LongTermValidation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeGeneralizedTime(value.poeDate, $.DER),
            /* IF_ABSENT  */ ((value.poeValue === undefined) ? undefined : _encode_LongTermValidation_poeValue(value.poeValue, $.DER)),
            /* IF_ABSENT  */ ((value.extraCertificates === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CertificateSet, $.DER)(value.extraCertificates, $.DER)),
            /* IF_ABSENT  */ ((value.extraRevocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_RevocationInfoChoices, $.DER)(value.extraRevocation, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_LongTermValidation(value, elGetter);
}


/* eslint-enable */

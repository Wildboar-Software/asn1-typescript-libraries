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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    CertificateList, _decode_CertificateList, _encode_CertificateList
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/CertificateList.ta.mjs";
import { BasicOCSPResponse, _decode_BasicOCSPResponse, _encode_BasicOCSPResponse } from "@wildboar/ocsp/src/lib/modules/OCSP-2013-08/BasicOCSPResponse.ta.mjs";
import { OtherRevVals, _decode_OtherRevVals, _encode_OtherRevVals } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherRevVals.ta.mjs";
/**
 * @summary RevocationValues
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevocationValues ::= SEQUENCE {
 *     crlVals         [0] SEQUENCE OF CertificateList OPTIONAL,
 *     ocspVals        [1] SEQUENCE OF BasicOCSPResponse OPTIONAL,
 *     otherRevVals    [2] OtherRevVals OPTIONAL}
 * ```
 *
 * @class
 */
export
class RevocationValues {
    constructor (
        /**
         * @summary `crlVals`.
         * @public
         * @readonly
         */
        readonly crlVals: OPTIONAL<CertificateList[]>,
        /**
         * @summary `ocspVals`.
         * @public
         * @readonly
         */
        readonly ocspVals: OPTIONAL<BasicOCSPResponse[]>,
        /**
         * @summary `otherRevVals`.
         * @public
         * @readonly
         */
        readonly otherRevVals: OPTIONAL<OtherRevVals>
    ) {}

    /**
     * @summary Restructures an object into a RevocationValues
     * @description
     *
     * This takes an `object` and converts it to a `RevocationValues`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RevocationValues`.
     * @returns {RevocationValues}
     */
    public static _from_object (_o: { [_K in keyof (RevocationValues)]: (RevocationValues)[_K] }): RevocationValues {
        return new RevocationValues(_o.crlVals, _o.ocspVals, _o.otherRevVals);
    }


}

/**
 * @summary The Leading Root Component Types of RevocationValues
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RevocationValues: $.ComponentSpec[] = [
    new $.ComponentSpec("crlVals", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("ocspVals", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("otherRevVals", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RevocationValues
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RevocationValues: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of RevocationValues
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_RevocationValues: $.ComponentSpec[] = [

];

let _cached_decoder_for_RevocationValues: $.ASN1Decoder<RevocationValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RevocationValues
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevocationValues} The decoded data structure.
 */
export
function _decode_RevocationValues (el: _Element) {
    if (!_cached_decoder_for_RevocationValues) { _cached_decoder_for_RevocationValues = function (el: _Element): RevocationValues {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let crlVals: OPTIONAL<CertificateList[]>;
    let ocspVals: OPTIONAL<BasicOCSPResponse[]>;
    let otherRevVals: OPTIONAL<OtherRevVals>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "crlVals": (_el: _Element): void => { crlVals = $._decode_explicit<CertificateList[]>(() => $._decodeSequenceOf<CertificateList>(() => _decode_CertificateList))(_el); },
        "ocspVals": (_el: _Element): void => { ocspVals = $._decode_explicit<BasicOCSPResponse[]>(() => $._decodeSequenceOf<BasicOCSPResponse>(() => _decode_BasicOCSPResponse))(_el); },
        "otherRevVals": (_el: _Element): void => { otherRevVals = $._decode_explicit<OtherRevVals>(() => _decode_OtherRevVals)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RevocationValues,
        _extension_additions_list_spec_for_RevocationValues,
        _root_component_type_list_2_spec_for_RevocationValues,
        undefined,
    );
    return new RevocationValues( /* SEQUENCE_CONSTRUCTOR_CALL */
        crlVals,
        ocspVals,
        otherRevVals
    );
}; }
    return _cached_decoder_for_RevocationValues(el);
}

let _cached_encoder_for_RevocationValues: $.ASN1Encoder<RevocationValues> | null = null;

/**
 * @summary Encodes a(n) RevocationValues into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevocationValues, encoded as an ASN.1 Element.
 */
export
function _encode_RevocationValues (value: RevocationValues, elGetter: $.ASN1Encoder<RevocationValues>) {
    if (!_cached_encoder_for_RevocationValues) { _cached_encoder_for_RevocationValues = function (value: RevocationValues): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.crlVals === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => $._encodeSequenceOf<CertificateList>(() => _encode_CertificateList, $.BER), $.BER)(value.crlVals, $.BER)),
            /* IF_ABSENT  */ ((value.ocspVals === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeSequenceOf<BasicOCSPResponse>(() => _encode_BasicOCSPResponse, $.BER), $.BER)(value.ocspVals, $.BER)),
            /* IF_ABSENT  */ ((value.otherRevVals === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_OtherRevVals, $.BER)(value.otherRevVals, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RevocationValues(value, elGetter);
}


/* eslint-enable */

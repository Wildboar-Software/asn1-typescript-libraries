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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OtherHash, _decode_OtherHash, _encode_OtherHash } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherHash.ta.mjs";
import {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "@wildboar/x500/src/lib/modules/AttributeCertificateDefinitions/IssuerSerial.ta.mjs";


/**
 * @summary OtherCertID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherCertID ::= SEQUENCE {
 *     otherCertHash   OtherHash,
 *     issuerSerial    IssuerSerial OPTIONAL }
 * ```
 *
 * @class
 */
export
class OtherCertID {
    constructor (
        /**
         * @summary `otherCertHash`.
         * @public
         * @readonly
         */
        readonly otherCertHash: OtherHash,
        /**
         * @summary `issuerSerial`.
         * @public
         * @readonly
         */
        readonly issuerSerial: OPTIONAL<IssuerSerial>
    ) {}

    /**
     * @summary Restructures an object into a OtherCertID
     * @description
     *
     * This takes an `object` and converts it to a `OtherCertID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherCertID`.
     * @returns {OtherCertID}
     */
    public static _from_object (_o: { [_K in keyof (OtherCertID)]: (OtherCertID)[_K] }): OtherCertID {
        return new OtherCertID(_o.otherCertHash, _o.issuerSerial);
    }


}

/**
 * @summary The Leading Root Component Types of OtherCertID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OtherCertID: $.ComponentSpec[] = [
    new $.ComponentSpec("otherCertHash", false, $.hasAnyTag),
    new $.ComponentSpec("issuerSerial", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of OtherCertID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OtherCertID: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of OtherCertID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_OtherCertID: $.ComponentSpec[] = [

];

let _cached_decoder_for_OtherCertID: $.ASN1Decoder<OtherCertID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherCertID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherCertID} The decoded data structure.
 */
export
function _decode_OtherCertID (el: _Element) {
    if (!_cached_decoder_for_OtherCertID) { _cached_decoder_for_OtherCertID = function (el: _Element): OtherCertID {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let otherCertHash!: OtherHash;
    let issuerSerial: OPTIONAL<IssuerSerial>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "otherCertHash": (_el: _Element): void => { otherCertHash = _decode_OtherHash(_el); },
        "issuerSerial": (_el: _Element): void => { issuerSerial = _decode_IssuerSerial(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OtherCertID,
        _extension_additions_list_spec_for_OtherCertID,
        _root_component_type_list_2_spec_for_OtherCertID,
        undefined,
    );
    return new OtherCertID( /* SEQUENCE_CONSTRUCTOR_CALL */
        otherCertHash,
        issuerSerial
    );
}; }
    return _cached_decoder_for_OtherCertID(el);
}

let _cached_encoder_for_OtherCertID: $.ASN1Encoder<OtherCertID> | null = null;

/**
 * @summary Encodes a(n) OtherCertID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherCertID, encoded as an ASN.1 Element.
 */
export
function _encode_OtherCertID (value: OtherCertID, elGetter: $.ASN1Encoder<OtherCertID>) {
    if (!_cached_encoder_for_OtherCertID) { _cached_encoder_for_OtherCertID = function (value: OtherCertID): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_OtherHash(value.otherCertHash, $.DER),
            /* IF_ABSENT  */ ((value.issuerSerial === undefined) ? undefined : _encode_IssuerSerial(value.issuerSerial, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_OtherCertID(value, elGetter);
}


/* eslint-enable */

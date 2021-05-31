/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { PostalAddress, _decode_PostalAddress, _encode_PostalAddress } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/PostalAddress.ta";
export { PostalAddress, _decode_PostalAddress, _encode_PostalAddress } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/PostalAddress.ta";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/DirectoryString.ta";


/* START_OF_SYMBOL_DEFINITION SignerLocation */
/**
 * @summary SignerLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignerLocation ::= SEQUENCE {
 *     -- at least one of the following shall be present
 *     countryName [0] DirectoryString OPTIONAL,
 *     -- As used to name a Country in X.500
 *     localityName [1] DirectoryString OPTIONAL,
 *     -- As used to name a locality in X.500
 *     postalAdddress [2] PostalAddress OPTIONAL }
 * ```
 *
 * @class
 */
export
class SignerLocation {
    constructor (
        /**
         * @summary `countryName`.
         * @public
         * @readonly
         */
        readonly countryName: OPTIONAL<DirectoryString>,
        /**
         * @summary `localityName`.
         * @public
         * @readonly
         */
        readonly localityName: OPTIONAL<DirectoryString>,
        /**
         * @summary `postalAdddress`.
         * @public
         * @readonly
         */
        readonly postalAdddress: OPTIONAL<PostalAddress>
    ) {}

    /**
     * @summary Restructures an object into a SignerLocation
     * @description
     *
     * This takes an `object` and converts it to a `SignerLocation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignerLocation`.
     * @returns {SignerLocation}
     */
    public static _from_object (_o: { [_K in keyof (SignerLocation)]: (SignerLocation)[_K] }): SignerLocation {
        return new SignerLocation(_o.countryName, _o.localityName, _o.postalAdddress);
    }


}
/* END_OF_SYMBOL_DEFINITION SignerLocation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignerLocation */
/**
 * @summary The Leading Root Component Types of SignerLocation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SignerLocation: $.ComponentSpec[] = [
    /* FIXME: countryName COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: localityName COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("postalAdddress", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignerLocation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignerLocation */
/**
 * @summary The Trailing Root Component Types of SignerLocation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SignerLocation: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignerLocation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignerLocation */
/**
 * @summary The Extension Addition Component Types of SignerLocation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_SignerLocation: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignerLocation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerLocation */
let _cached_decoder_for_SignerLocation: $.ASN1Decoder<SignerLocation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerLocation */

/* START_OF_SYMBOL_DEFINITION _decode_SignerLocation */
/**
 * @summary Decodes an ASN.1 element into a(n) SignerLocation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerLocation} The decoded data structure.
 */
export
function _decode_SignerLocation (el: _Element) {
    if (!_cached_decoder_for_SignerLocation) { _cached_decoder_for_SignerLocation = function (el: _Element): SignerLocation {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let countryName: OPTIONAL<DirectoryString>;
    let localityName: OPTIONAL<DirectoryString>;
    let postalAdddress: OPTIONAL<PostalAddress>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "countryName": (_el: _Element): void => { countryName = $._decode_explicit<DirectoryString>(() => _decode_DirectoryString)(_el); },
        "localityName": (_el: _Element): void => { localityName = $._decode_explicit<DirectoryString>(() => _decode_DirectoryString)(_el); },
        "postalAdddress": (_el: _Element): void => { postalAdddress = $._decode_explicit<PostalAddress>(() => _decode_PostalAddress)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SignerLocation,
        _extension_additions_list_spec_for_SignerLocation,
        _root_component_type_list_2_spec_for_SignerLocation,
        undefined,
    );
    return new SignerLocation( /* SEQUENCE_CONSTRUCTOR_CALL */
        countryName,
        localityName,
        postalAdddress
    );
}; }
    return _cached_decoder_for_SignerLocation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignerLocation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerLocation */
let _cached_encoder_for_SignerLocation: $.ASN1Encoder<SignerLocation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerLocation */

/* START_OF_SYMBOL_DEFINITION _encode_SignerLocation */
/**
 * @summary Encodes a(n) SignerLocation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerLocation, encoded as an ASN.1 Element.
 */
export
function _encode_SignerLocation (value: SignerLocation, elGetter: $.ASN1Encoder<SignerLocation>) {
    if (!_cached_encoder_for_SignerLocation) { _cached_encoder_for_SignerLocation = function (value: SignerLocation, elGetter: $.ASN1Encoder<SignerLocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.countryName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_DirectoryString, $.BER)(value.countryName, $.BER)),
            /* IF_ABSENT  */ ((value.localityName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_DirectoryString, $.BER)(value.localityName, $.BER)),
            /* IF_ABSENT  */ ((value.postalAdddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_PostalAddress, $.BER)(value.postalAdddress, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SignerLocation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignerLocation */

/* eslint-enable */

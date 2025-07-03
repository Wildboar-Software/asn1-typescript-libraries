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
import { PostalAddress, _decode_PostalAddress, _encode_PostalAddress } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/PostalAddress.ta.mjs";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/SelectedAttributeTypes";


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
    new $.ComponentSpec("countryName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("localityName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("postalAdddress", true, $.hasTag(_TagClass.context, 2))
];

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

let _cached_decoder_for_SignerLocation: $.ASN1Decoder<SignerLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignerLocation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerLocation} The decoded data structure.
 */
export
function _decode_SignerLocation (el: _Element): SignerLocation {
    if (!_cached_decoder_for_SignerLocation) { _cached_decoder_for_SignerLocation = function (el: _Element): SignerLocation {
    let countryName: OPTIONAL<DirectoryString>;
    let localityName: OPTIONAL<DirectoryString>;
    let postalAdddress: OPTIONAL<PostalAddress>;
    const callbacks: $.DecodingMap = {
        "countryName": (_el: _Element): void => { countryName = $._decode_explicit<DirectoryString>(() => _decode_DirectoryString)(_el); },
        "localityName": (_el: _Element): void => { localityName = $._decode_explicit<DirectoryString>(() => _decode_DirectoryString)(_el); },
        "postalAdddress": (_el: _Element): void => { postalAdddress = $._decode_explicit<PostalAddress>(() => _decode_PostalAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SignerLocation,
        _extension_additions_list_spec_for_SignerLocation,
        _root_component_type_list_2_spec_for_SignerLocation,
        undefined,
    );
    return new SignerLocation( 
        countryName,
        localityName,
        postalAdddress
    );
}; }
    return _cached_decoder_for_SignerLocation(el);
}

let _cached_encoder_for_SignerLocation: $.ASN1Encoder<SignerLocation> | null = null;

/**
 * @summary Encodes a(n) SignerLocation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerLocation, encoded as an ASN.1 Element.
 */
export
function _encode_SignerLocation (value: SignerLocation, elGetter: $.ASN1Encoder<SignerLocation>): _Element {
    if (!_cached_encoder_for_SignerLocation) { _cached_encoder_for_SignerLocation = function (value: SignerLocation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.countryName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_DirectoryString, $.DER)(value.countryName, $.DER)),
            /* IF_ABSENT  */ ((value.localityName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_DirectoryString, $.DER)(value.localityName, $.DER)),
            /* IF_ABSENT  */ ((value.postalAdddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_PostalAddress, $.DER)(value.postalAdddress, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_SignerLocation(value, elGetter);
}


/* eslint-enable */

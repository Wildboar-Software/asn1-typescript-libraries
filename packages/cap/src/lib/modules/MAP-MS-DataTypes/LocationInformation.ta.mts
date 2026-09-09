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
import * as $ from "asn1-ts/dist/functional.mjs";
import { AgeOfLocationInformation, _decode_AgeOfLocationInformation, _encode_AgeOfLocationInformation } from "../MAP-CommonDataTypes/AgeOfLocationInformation.ta.mjs";
// export { AgeOfLocationInformation, _decode_AgeOfLocationInformation, _encode_AgeOfLocationInformation } from "../MAP-CommonDataTypes/AgeOfLocationInformation.ta.mjs";
import { GeographicalInformation, _decode_GeographicalInformation, _encode_GeographicalInformation } from "../MAP-MS-DataTypes/GeographicalInformation.ta.mjs";
// export { GeographicalInformation, _decode_GeographicalInformation, _encode_GeographicalInformation } from "../MAP-MS-DataTypes/GeographicalInformation.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../MAP-MS-DataTypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../MAP-MS-DataTypes/LocationNumber.ta.mjs";
import { CellGlobalIdOrServiceAreaIdOrLAI, _decode_CellGlobalIdOrServiceAreaIdOrLAI, _encode_CellGlobalIdOrServiceAreaIdOrLAI } from "../MAP-CommonDataTypes/CellGlobalIdOrServiceAreaIdOrLAI.ta.mjs";
// export { CellGlobalIdOrServiceAreaIdOrLAI, _decode_CellGlobalIdOrServiceAreaIdOrLAI, _encode_CellGlobalIdOrServiceAreaIdOrLAI } from "../MAP-CommonDataTypes/CellGlobalIdOrServiceAreaIdOrLAI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { LSAIdentity, _decode_LSAIdentity, _encode_LSAIdentity } from "../MAP-MS-DataTypes/LSAIdentity.ta.mjs";
// export { LSAIdentity, _decode_LSAIdentity, _encode_LSAIdentity } from "../MAP-MS-DataTypes/LSAIdentity.ta.mjs";
import { GeodeticInformation, _decode_GeodeticInformation, _encode_GeodeticInformation } from "../MAP-MS-DataTypes/GeodeticInformation.ta.mjs";
// export { GeodeticInformation, _decode_GeodeticInformation, _encode_GeodeticInformation } from "../MAP-MS-DataTypes/GeodeticInformation.ta.mjs";
import { LocationInformationEPS, _decode_LocationInformationEPS, _encode_LocationInformationEPS } from "../MAP-MS-DataTypes/LocationInformationEPS.ta.mjs";
// export { LocationInformationEPS, _decode_LocationInformationEPS, _encode_LocationInformationEPS } from "../MAP-MS-DataTypes/LocationInformationEPS.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../MAP-MS-DataTypes/UserCSGInformation.ta.mjs";
// export { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../MAP-MS-DataTypes/UserCSGInformation.ta.mjs";


/**
 * @summary LocationInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationInformation ::= SEQUENCE {
 *     ageOfLocationInformation    AgeOfLocationInformation    OPTIONAL,
 *     geographicalInformation    [0] GeographicalInformation    OPTIONAL,
 *     vlr-number    [1] ISDN-AddressString    OPTIONAL,
 *     locationNumber    [2] LocationNumber    OPTIONAL,
 *     cellGlobalIdOrServiceAreaIdOrLAI    [3] CellGlobalIdOrServiceAreaIdOrLAI    OPTIONAL,
 *     extensionContainer    [4] ExtensionContainer    OPTIONAL,
 *     ... ,
 *     selectedLSA-Id    [5] LSAIdentity    OPTIONAL,
 *     msc-Number    [6] ISDN-AddressString    OPTIONAL,
 *     geodeticInformation    [7] GeodeticInformation    OPTIONAL, 
 *     currentLocationRetrieved    [8] NULL    OPTIONAL,
 *     sai-Present    [9] NULL    OPTIONAL,
 *     locationInformationEPS    [10] LocationInformationEPS    OPTIONAL,
 *     userCSGInformation    [11] UserCSGInformation    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LocationInformation {
    constructor (
        /**
         * @summary `ageOfLocationInformation`.
         * @public
         * @readonly
         */
        readonly ageOfLocationInformation: OPTIONAL<AgeOfLocationInformation>,
        /**
         * @summary `geographicalInformation`.
         * @public
         * @readonly
         */
        readonly geographicalInformation: OPTIONAL<GeographicalInformation>,
        /**
         * @summary `vlr_number`.
         * @public
         * @readonly
         */
        readonly vlr_number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `locationNumber`.
         * @public
         * @readonly
         */
        readonly locationNumber: OPTIONAL<LocationNumber>,
        /**
         * @summary `cellGlobalIdOrServiceAreaIdOrLAI`.
         * @public
         * @readonly
         */
        readonly cellGlobalIdOrServiceAreaIdOrLAI: OPTIONAL<CellGlobalIdOrServiceAreaIdOrLAI>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `selectedLSA_Id`.
         * @public
         * @readonly
         */
        readonly selectedLSA_Id: OPTIONAL<LSAIdentity>,
        /**
         * @summary `msc_Number`.
         * @public
         * @readonly
         */
        readonly msc_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `geodeticInformation`.
         * @public
         * @readonly
         */
        readonly geodeticInformation: OPTIONAL<GeodeticInformation>,
        /**
         * @summary `currentLocationRetrieved`.
         * @public
         * @readonly
         */
        readonly currentLocationRetrieved: OPTIONAL<NULL>,
        /**
         * @summary `sai_Present`.
         * @public
         * @readonly
         */
        readonly sai_Present: OPTIONAL<NULL>,
        /**
         * @summary `locationInformationEPS`.
         * @public
         * @readonly
         */
        readonly locationInformationEPS: OPTIONAL<LocationInformationEPS>,
        /**
         * @summary `userCSGInformation`.
         * @public
         * @readonly
         */
        readonly userCSGInformation: OPTIONAL<UserCSGInformation>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LocationInformation
     * @description
     * 
     * This takes an `object` and converts it to a `LocationInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationInformation`.
     * @returns {LocationInformation}
     */
    public static _from_object (_o: { [_K in keyof (LocationInformation)]: (LocationInformation)[_K] }): LocationInformation {
        return new LocationInformation(_o.ageOfLocationInformation, _o.geographicalInformation, _o.vlr_number, _o.locationNumber, _o.cellGlobalIdOrServiceAreaIdOrLAI, _o.extensionContainer, _o.selectedLSA_Id, _o.msc_Number, _o.geodeticInformation, _o.currentLocationRetrieved, _o.sai_Present, _o.locationInformationEPS, _o.userCSGInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("ageOfLocationInformation", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("vlr-number", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("locationNumber", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("cellGlobalIdOrServiceAreaIdOrLAI", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("selectedLSA-Id", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("msc-Number", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("geodeticInformation", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("currentLocationRetrieved", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("sai-Present", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("locationInformationEPS", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 11), undefined, undefined)
];

let _cached_decoder_for_LocationInformation: $.ASN1Decoder<LocationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationInformation (el: _Element): LocationInformation {
    if (!_cached_decoder_for_LocationInformation) { _cached_decoder_for_LocationInformation = function (el: _Element): LocationInformation {
    let ageOfLocationInformation: OPTIONAL<AgeOfLocationInformation>;
    let geographicalInformation: OPTIONAL<GeographicalInformation>;
    let vlr_number: OPTIONAL<ISDN_AddressString>;
    let locationNumber: OPTIONAL<LocationNumber>;
    let cellGlobalIdOrServiceAreaIdOrLAI: OPTIONAL<CellGlobalIdOrServiceAreaIdOrLAI>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let selectedLSA_Id: OPTIONAL<LSAIdentity>;
    let msc_Number: OPTIONAL<ISDN_AddressString>;
    let geodeticInformation: OPTIONAL<GeodeticInformation>;
    let currentLocationRetrieved: OPTIONAL<NULL>;
    let sai_Present: OPTIONAL<NULL>;
    let locationInformationEPS: OPTIONAL<LocationInformationEPS>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ageOfLocationInformation": (_el: _Element): void => { ageOfLocationInformation = _decode_AgeOfLocationInformation(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<GeographicalInformation>(() => _decode_GeographicalInformation)(_el); },
        "vlr-number": (_el: _Element): void => { vlr_number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "locationNumber": (_el: _Element): void => { locationNumber = $._decode_implicit<LocationNumber>(() => _decode_LocationNumber)(_el); },
        "cellGlobalIdOrServiceAreaIdOrLAI": (_el: _Element): void => { cellGlobalIdOrServiceAreaIdOrLAI = $._decode_explicit<CellGlobalIdOrServiceAreaIdOrLAI>(() => _decode_CellGlobalIdOrServiceAreaIdOrLAI)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "selectedLSA-Id": (_el: _Element): void => { selectedLSA_Id = $._decode_implicit<LSAIdentity>(() => _decode_LSAIdentity)(_el); },
        "msc-Number": (_el: _Element): void => { msc_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "geodeticInformation": (_el: _Element): void => { geodeticInformation = $._decode_implicit<GeodeticInformation>(() => _decode_GeodeticInformation)(_el); },
        "currentLocationRetrieved": (_el: _Element): void => { currentLocationRetrieved = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "sai-Present": (_el: _Element): void => { sai_Present = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "locationInformationEPS": (_el: _Element): void => { locationInformationEPS = $._decode_implicit<LocationInformationEPS>(() => _decode_LocationInformationEPS)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationInformation,
        _extension_additions_list_spec_for_LocationInformation,
        _root_component_type_list_2_spec_for_LocationInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LocationInformation(
        ageOfLocationInformation,
        geographicalInformation,
        vlr_number,
        locationNumber,
        cellGlobalIdOrServiceAreaIdOrLAI,
        extensionContainer,
        selectedLSA_Id,
        msc_Number,
        geodeticInformation,
        currentLocationRetrieved,
        sai_Present,
        locationInformationEPS,
        userCSGInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LocationInformation(el);
}

let _cached_encoder_for_LocationInformation: $.ASN1Encoder<LocationInformation> | null = null;

/**
 * @summary Encodes a(n) LocationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_LocationInformation (value: LocationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationInformation) { _cached_encoder_for_LocationInformation = function (value: LocationInformation, elGetter: $.ASN1Encoder<LocationInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ageOfLocationInformation === undefined) ? undefined : _encode_AgeOfLocationInformation(value.ageOfLocationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.geographicalInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GeographicalInformation, $.BER)(value.geographicalInformation, $.BER)),
            /* IF_ABSENT  */ ((value.vlr_number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.vlr_number, $.BER)),
            /* IF_ABSENT  */ ((value.locationNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LocationNumber, $.BER)(value.locationNumber, $.BER)),
            /* IF_ABSENT  */ ((value.cellGlobalIdOrServiceAreaIdOrLAI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_CellGlobalIdOrServiceAreaIdOrLAI, $.BER)(value.cellGlobalIdOrServiceAreaIdOrLAI, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.selectedLSA_Id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_LSAIdentity, $.BER)(value.selectedLSA_Id, $.BER)),
            /* IF_ABSENT  */ ((value.msc_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ISDN_AddressString, $.BER)(value.msc_Number, $.BER)),
            /* IF_ABSENT  */ ((value.geodeticInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_GeodeticInformation, $.BER)(value.geodeticInformation, $.BER)),
            /* IF_ABSENT  */ ((value.currentLocationRetrieved === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.currentLocationRetrieved, $.BER)),
            /* IF_ABSENT  */ ((value.sai_Present === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value.sai_Present, $.BER)),
            /* IF_ABSENT  */ ((value.locationInformationEPS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_LocationInformationEPS, $.BER)(value.locationInformationEPS, $.BER)),
            /* IF_ABSENT  */ ((value.userCSGInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationInformation(value, elGetter);
}


/* eslint-enable */

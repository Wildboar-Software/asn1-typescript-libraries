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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CellGlobalIdOrServiceAreaIdOrLAI, _decode_CellGlobalIdOrServiceAreaIdOrLAI, _encode_CellGlobalIdOrServiceAreaIdOrLAI } from "../MAP-CommonDataTypes/CellGlobalIdOrServiceAreaIdOrLAI.ta.mjs";
// export { CellGlobalIdOrServiceAreaIdOrLAI, _decode_CellGlobalIdOrServiceAreaIdOrLAI, _encode_CellGlobalIdOrServiceAreaIdOrLAI } from "../MAP-CommonDataTypes/CellGlobalIdOrServiceAreaIdOrLAI.ta.mjs";
import { RAIdentity, _decode_RAIdentity, _encode_RAIdentity } from "../MAP-CommonDataTypes/RAIdentity.ta.mjs";
// export { RAIdentity, _decode_RAIdentity, _encode_RAIdentity } from "../MAP-CommonDataTypes/RAIdentity.ta.mjs";
import { GeographicalInformation, _decode_GeographicalInformation, _encode_GeographicalInformation } from "../MAP-MS-DataTypes/GeographicalInformation.ta.mjs";
// export { GeographicalInformation, _decode_GeographicalInformation, _encode_GeographicalInformation } from "../MAP-MS-DataTypes/GeographicalInformation.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { LSAIdentity, _decode_LSAIdentity, _encode_LSAIdentity } from "../MAP-MS-DataTypes/LSAIdentity.ta.mjs";
// export { LSAIdentity, _decode_LSAIdentity, _encode_LSAIdentity } from "../MAP-MS-DataTypes/LSAIdentity.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { GeodeticInformation, _decode_GeodeticInformation, _encode_GeodeticInformation } from "../MAP-MS-DataTypes/GeodeticInformation.ta.mjs";
// export { GeodeticInformation, _decode_GeodeticInformation, _encode_GeodeticInformation } from "../MAP-MS-DataTypes/GeodeticInformation.ta.mjs";
import { AgeOfLocationInformation, _decode_AgeOfLocationInformation, _encode_AgeOfLocationInformation } from "../MAP-CommonDataTypes/AgeOfLocationInformation.ta.mjs";
// export { AgeOfLocationInformation, _decode_AgeOfLocationInformation, _encode_AgeOfLocationInformation } from "../MAP-CommonDataTypes/AgeOfLocationInformation.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../MAP-MS-DataTypes/UserCSGInformation.ta.mjs";
// export { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../MAP-MS-DataTypes/UserCSGInformation.ta.mjs";


/**
 * @summary LocationInformationGPRS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationInformationGPRS ::= SEQUENCE {
 *     cellGlobalIdOrServiceAreaIdOrLAI    [0] CellGlobalIdOrServiceAreaIdOrLAI OPTIONAL,
 *     routeingAreaIdentity    [1] RAIdentity    OPTIONAL,
 *     geographicalInformation    [2] GeographicalInformation    OPTIONAL,
 *     sgsn-Number    [3] ISDN-AddressString    OPTIONAL,
 *     selectedLSAIdentity    [4] LSAIdentity    OPTIONAL,
 *     extensionContainer    [5] ExtensionContainer    OPTIONAL,
 *     ...,
 *     sai-Present    [6] NULL    OPTIONAL,
 *     geodeticInformation    [7] GeodeticInformation    OPTIONAL,
 *     currentLocationRetrieved    [8] NULL    OPTIONAL,
 *     ageOfLocationInformation    [9] AgeOfLocationInformation    OPTIONAL,
 *     userCSGInformation    [10] UserCSGInformation    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LocationInformationGPRS {
    constructor (
        /**
         * @summary `cellGlobalIdOrServiceAreaIdOrLAI`.
         * @public
         * @readonly
         */
        readonly cellGlobalIdOrServiceAreaIdOrLAI: OPTIONAL<CellGlobalIdOrServiceAreaIdOrLAI>,
        /**
         * @summary `routeingAreaIdentity`.
         * @public
         * @readonly
         */
        readonly routeingAreaIdentity: OPTIONAL<RAIdentity>,
        /**
         * @summary `geographicalInformation`.
         * @public
         * @readonly
         */
        readonly geographicalInformation: OPTIONAL<GeographicalInformation>,
        /**
         * @summary `sgsn_Number`.
         * @public
         * @readonly
         */
        readonly sgsn_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `selectedLSAIdentity`.
         * @public
         * @readonly
         */
        readonly selectedLSAIdentity: OPTIONAL<LSAIdentity>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `sai_Present`.
         * @public
         * @readonly
         */
        readonly sai_Present: OPTIONAL<NULL>,
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
         * @summary `ageOfLocationInformation`.
         * @public
         * @readonly
         */
        readonly ageOfLocationInformation: OPTIONAL<AgeOfLocationInformation>,
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
     * @summary Restructures an object into a LocationInformationGPRS
     * @description
     * 
     * This takes an `object` and converts it to a `LocationInformationGPRS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationInformationGPRS`.
     * @returns {LocationInformationGPRS}
     */
    public static _from_object (_o: { [_K in keyof (LocationInformationGPRS)]: (LocationInformationGPRS)[_K] }): LocationInformationGPRS {
        return new LocationInformationGPRS(_o.cellGlobalIdOrServiceAreaIdOrLAI, _o.routeingAreaIdentity, _o.geographicalInformation, _o.sgsn_Number, _o.selectedLSAIdentity, _o.extensionContainer, _o.sai_Present, _o.geodeticInformation, _o.currentLocationRetrieved, _o.ageOfLocationInformation, _o.userCSGInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LocationInformationGPRS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationInformationGPRS: $.ComponentSpec[] = [
    new $.ComponentSpec("cellGlobalIdOrServiceAreaIdOrLAI", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("routeingAreaIdentity", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("sgsn-Number", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("selectedLSAIdentity", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LocationInformationGPRS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationInformationGPRS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationInformationGPRS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationInformationGPRS: $.ComponentSpec[] = [
    new $.ComponentSpec("sai-Present", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("geodeticInformation", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("currentLocationRetrieved", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("ageOfLocationInformation", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 10), undefined, undefined)
];

let _cached_decoder_for_LocationInformationGPRS: $.ASN1Decoder<LocationInformationGPRS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationInformationGPRS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationInformationGPRS (el: _Element): LocationInformationGPRS {
    if (!_cached_decoder_for_LocationInformationGPRS) { _cached_decoder_for_LocationInformationGPRS = function (el: _Element): LocationInformationGPRS {
    let cellGlobalIdOrServiceAreaIdOrLAI: OPTIONAL<CellGlobalIdOrServiceAreaIdOrLAI>;
    let routeingAreaIdentity: OPTIONAL<RAIdentity>;
    let geographicalInformation: OPTIONAL<GeographicalInformation>;
    let sgsn_Number: OPTIONAL<ISDN_AddressString>;
    let selectedLSAIdentity: OPTIONAL<LSAIdentity>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let sai_Present: OPTIONAL<NULL>;
    let geodeticInformation: OPTIONAL<GeodeticInformation>;
    let currentLocationRetrieved: OPTIONAL<NULL>;
    let ageOfLocationInformation: OPTIONAL<AgeOfLocationInformation>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cellGlobalIdOrServiceAreaIdOrLAI": (_el: _Element): void => { cellGlobalIdOrServiceAreaIdOrLAI = $._decode_explicit<CellGlobalIdOrServiceAreaIdOrLAI>(() => _decode_CellGlobalIdOrServiceAreaIdOrLAI)(_el); },
        "routeingAreaIdentity": (_el: _Element): void => { routeingAreaIdentity = $._decode_implicit<RAIdentity>(() => _decode_RAIdentity)(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<GeographicalInformation>(() => _decode_GeographicalInformation)(_el); },
        "sgsn-Number": (_el: _Element): void => { sgsn_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "selectedLSAIdentity": (_el: _Element): void => { selectedLSAIdentity = $._decode_implicit<LSAIdentity>(() => _decode_LSAIdentity)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "sai-Present": (_el: _Element): void => { sai_Present = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "geodeticInformation": (_el: _Element): void => { geodeticInformation = $._decode_implicit<GeodeticInformation>(() => _decode_GeodeticInformation)(_el); },
        "currentLocationRetrieved": (_el: _Element): void => { currentLocationRetrieved = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ageOfLocationInformation": (_el: _Element): void => { ageOfLocationInformation = $._decode_implicit<AgeOfLocationInformation>(() => _decode_AgeOfLocationInformation)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationInformationGPRS,
        _extension_additions_list_spec_for_LocationInformationGPRS,
        _root_component_type_list_2_spec_for_LocationInformationGPRS,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LocationInformationGPRS(
        cellGlobalIdOrServiceAreaIdOrLAI,
        routeingAreaIdentity,
        geographicalInformation,
        sgsn_Number,
        selectedLSAIdentity,
        extensionContainer,
        sai_Present,
        geodeticInformation,
        currentLocationRetrieved,
        ageOfLocationInformation,
        userCSGInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LocationInformationGPRS(el);
}

let _cached_encoder_for_LocationInformationGPRS: $.ASN1Encoder<LocationInformationGPRS> | null = null;

/**
 * @summary Encodes a(n) LocationInformationGPRS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationInformationGPRS, encoded as an ASN.1 Element.
 */
export
function _encode_LocationInformationGPRS (value: LocationInformationGPRS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationInformationGPRS) { _cached_encoder_for_LocationInformationGPRS = function (value: LocationInformationGPRS, elGetter: $.ASN1Encoder<LocationInformationGPRS>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.cellGlobalIdOrServiceAreaIdOrLAI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_CellGlobalIdOrServiceAreaIdOrLAI, $.BER)(value.cellGlobalIdOrServiceAreaIdOrLAI, $.BER)),
            /* IF_ABSENT  */ ((value.routeingAreaIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_RAIdentity, $.BER)(value.routeingAreaIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.geographicalInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GeographicalInformation, $.BER)(value.geographicalInformation, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ISDN_AddressString, $.BER)(value.sgsn_Number, $.BER)),
            /* IF_ABSENT  */ ((value.selectedLSAIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_LSAIdentity, $.BER)(value.selectedLSAIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.sai_Present === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.sai_Present, $.BER)),
            /* IF_ABSENT  */ ((value.geodeticInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_GeodeticInformation, $.BER)(value.geodeticInformation, $.BER)),
            /* IF_ABSENT  */ ((value.currentLocationRetrieved === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.currentLocationRetrieved, $.BER)),
            /* IF_ABSENT  */ ((value.ageOfLocationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_AgeOfLocationInformation, $.BER)(value.ageOfLocationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.userCSGInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationInformationGPRS(value, elGetter);
}


/* eslint-enable */

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
import { E_UTRAN_CGI, _decode_E_UTRAN_CGI, _encode_E_UTRAN_CGI } from "../MAP-CommonDataTypes/E-UTRAN-CGI.ta.mjs";
import { TA_Id, _decode_TA_Id, _encode_TA_Id } from "../MAP-CommonDataTypes/TA-Id.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { GeographicalInformation, _decode_GeographicalInformation, _encode_GeographicalInformation } from "../MAP-MS-DataTypes/GeographicalInformation.ta.mjs";
import { GeodeticInformation, _decode_GeodeticInformation, _encode_GeodeticInformation } from "../MAP-MS-DataTypes/GeodeticInformation.ta.mjs";
import { AgeOfLocationInformation, _decode_AgeOfLocationInformation, _encode_AgeOfLocationInformation } from "../MAP-CommonDataTypes/AgeOfLocationInformation.ta.mjs";
import { DiameterIdentity, _decode_DiameterIdentity, _encode_DiameterIdentity } from "../MAP-CommonDataTypes/DiameterIdentity.ta.mjs";


/**
 * @summary LocationInformationEPS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationInformationEPS ::= SEQUENCE {
 *     e-utranCellGlobalIdentity    [0] E-UTRAN-CGI    OPTIONAL,
 *     trackingAreaIdentity    [1] TA-Id    OPTIONAL,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     geographicalInformation    [3] GeographicalInformation    OPTIONAL,
 *     geodeticInformation    [4] GeodeticInformation    OPTIONAL,
 *     currentLocationRetrieved    [5] NULL    OPTIONAL,
 *     ageOfLocationInformation    [6] AgeOfLocationInformation    OPTIONAL,
 *     ...,
 *     mme-Name    [7] DiameterIdentity    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LocationInformationEPS {
    constructor (
        /**
         * @summary `e_utranCellGlobalIdentity`.
         * @public
         * @readonly
         */
        readonly e_utranCellGlobalIdentity: OPTIONAL<E_UTRAN_CGI>,
        /**
         * @summary `trackingAreaIdentity`.
         * @public
         * @readonly
         */
        readonly trackingAreaIdentity: OPTIONAL<TA_Id>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `geographicalInformation`.
         * @public
         * @readonly
         */
        readonly geographicalInformation: OPTIONAL<GeographicalInformation>,
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
         * @summary `mme_Name`.
         * @public
         * @readonly
         */
        readonly mme_Name: OPTIONAL<DiameterIdentity>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LocationInformationEPS
     * @description
     * 
     * This takes an `object` and converts it to a `LocationInformationEPS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationInformationEPS`.
     * @returns {LocationInformationEPS}
     */
    public static _from_object (_o: { [_K in keyof (LocationInformationEPS)]: (LocationInformationEPS)[_K] }): LocationInformationEPS {
        return new LocationInformationEPS(_o.e_utranCellGlobalIdentity, _o.trackingAreaIdentity, _o.extensionContainer, _o.geographicalInformation, _o.geodeticInformation, _o.currentLocationRetrieved, _o.ageOfLocationInformation, _o.mme_Name, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LocationInformationEPS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationInformationEPS: $.ComponentSpec[] = [
    new $.ComponentSpec("e-utranCellGlobalIdentity", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("trackingAreaIdentity", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("geographicalInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("geodeticInformation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("currentLocationRetrieved", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("ageOfLocationInformation", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of LocationInformationEPS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationInformationEPS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationInformationEPS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationInformationEPS: $.ComponentSpec[] = [
    new $.ComponentSpec("mme-Name", true, $.hasTag(_TagClass.context, 7))
];

let _cached_decoder_for_LocationInformationEPS: $.ASN1Decoder<LocationInformationEPS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationInformationEPS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationInformationEPS (el: _Element): LocationInformationEPS {
    if (!_cached_decoder_for_LocationInformationEPS) { _cached_decoder_for_LocationInformationEPS = function (el: _Element): LocationInformationEPS {
    let e_utranCellGlobalIdentity: OPTIONAL<E_UTRAN_CGI> = undefined;
    let trackingAreaIdentity: OPTIONAL<TA_Id> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let geographicalInformation: OPTIONAL<GeographicalInformation> = undefined;
    let geodeticInformation: OPTIONAL<GeodeticInformation> = undefined;
    let currentLocationRetrieved: OPTIONAL<NULL> = undefined;
    let ageOfLocationInformation: OPTIONAL<AgeOfLocationInformation> = undefined;
    let mme_Name: OPTIONAL<DiameterIdentity> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "e-utranCellGlobalIdentity": (_el: _Element): void => { e_utranCellGlobalIdentity = $._decode_implicit<E_UTRAN_CGI>(() => _decode_E_UTRAN_CGI)(_el); },
        "trackingAreaIdentity": (_el: _Element): void => { trackingAreaIdentity = $._decode_implicit<TA_Id>(() => _decode_TA_Id)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "geographicalInformation": (_el: _Element): void => { geographicalInformation = $._decode_implicit<GeographicalInformation>(() => _decode_GeographicalInformation)(_el); },
        "geodeticInformation": (_el: _Element): void => { geodeticInformation = $._decode_implicit<GeodeticInformation>(() => _decode_GeodeticInformation)(_el); },
        "currentLocationRetrieved": (_el: _Element): void => { currentLocationRetrieved = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ageOfLocationInformation": (_el: _Element): void => { ageOfLocationInformation = $._decode_implicit<AgeOfLocationInformation>(() => _decode_AgeOfLocationInformation)(_el); },
        "mme-Name": (_el: _Element): void => { mme_Name = $._decode_implicit<DiameterIdentity>(() => _decode_DiameterIdentity)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationInformationEPS,
        _extension_additions_list_spec_for_LocationInformationEPS,
        _root_component_type_list_2_spec_for_LocationInformationEPS,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LocationInformationEPS(
        e_utranCellGlobalIdentity,
        trackingAreaIdentity,
        extensionContainer,
        geographicalInformation,
        geodeticInformation,
        currentLocationRetrieved,
        ageOfLocationInformation,
        mme_Name,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LocationInformationEPS(el);
}

let _cached_encoder_for_LocationInformationEPS: $.ASN1Encoder<LocationInformationEPS> | null = null;

/**
 * @summary Encodes a(n) LocationInformationEPS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationInformationEPS, encoded as an ASN.1 Element.
 */
export
function _encode_LocationInformationEPS (value: LocationInformationEPS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationInformationEPS) { _cached_encoder_for_LocationInformationEPS = function (value: LocationInformationEPS, elGetter: $.ASN1Encoder<LocationInformationEPS>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.e_utranCellGlobalIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_E_UTRAN_CGI, $.BER)(value.e_utranCellGlobalIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.trackingAreaIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_TA_Id, $.BER)(value.trackingAreaIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER)),
            /* IF_ABSENT  */ ((value.geographicalInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GeographicalInformation, $.BER)(value.geographicalInformation, $.BER)),
            /* IF_ABSENT  */ ((value.geodeticInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_GeodeticInformation, $.BER)(value.geodeticInformation, $.BER)),
            /* IF_ABSENT  */ ((value.currentLocationRetrieved === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value.currentLocationRetrieved, $.BER)),
            /* IF_ABSENT  */ ((value.ageOfLocationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_AgeOfLocationInformation, $.BER)(value.ageOfLocationInformation, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.mme_Name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_DiameterIdentity, $.BER)(value.mme_Name, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationInformationEPS(value, elGetter);
}


/* eslint-enable */

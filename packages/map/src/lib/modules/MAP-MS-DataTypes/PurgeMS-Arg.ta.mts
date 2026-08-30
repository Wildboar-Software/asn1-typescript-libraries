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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { LocationInformation, _decode_LocationInformation, _encode_LocationInformation } from "../MAP-MS-DataTypes/LocationInformation.ta.mjs";
import { LocationInformationGPRS, _decode_LocationInformationGPRS, _encode_LocationInformationGPRS } from "../MAP-MS-DataTypes/LocationInformationGPRS.ta.mjs";
import { LocationInformationEPS, _decode_LocationInformationEPS, _encode_LocationInformationEPS } from "../MAP-MS-DataTypes/LocationInformationEPS.ta.mjs";


/**
 * @summary PurgeMS_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PurgeMS-Arg ::= [3] SEQUENCE {
 *     imsi    IMSI,
 *     vlr-Number    [0] ISDN-AddressString    OPTIONAL,
 *     sgsn-Number    [1]    ISDN-AddressString    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     locationInformation    [2] LocationInformation    OPTIONAL,
 *     locationInformationGPRS    [3] LocationInformationGPRS    OPTIONAL,
 *     locationInformationEPS    [4] LocationInformationEPS    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PurgeMS_Arg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `vlr_Number`.
         * @public
         * @readonly
         */
        readonly vlr_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `sgsn_Number`.
         * @public
         * @readonly
         */
        readonly sgsn_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `locationInformation`.
         * @public
         * @readonly
         */
        readonly locationInformation: OPTIONAL<LocationInformation>,
        /**
         * @summary `locationInformationGPRS`.
         * @public
         * @readonly
         */
        readonly locationInformationGPRS: OPTIONAL<LocationInformationGPRS>,
        /**
         * @summary `locationInformationEPS`.
         * @public
         * @readonly
         */
        readonly locationInformationEPS: OPTIONAL<LocationInformationEPS>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PurgeMS_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `PurgeMS_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PurgeMS_Arg`.
     * @returns {PurgeMS_Arg}
     */
    public static _from_object (_o: { [_K in keyof (PurgeMS_Arg)]: (PurgeMS_Arg)[_K] }): PurgeMS_Arg {
        return new PurgeMS_Arg(_o.imsi, _o.vlr_Number, _o.sgsn_Number, _o.extensionContainer, _o.locationInformation, _o.locationInformationGPRS, _o.locationInformationEPS, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PurgeMS_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PurgeMS_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("vlr-Number", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sgsn-Number", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of PurgeMS_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PurgeMS_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PurgeMS_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PurgeMS_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("locationInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("locationInformationGPRS", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("locationInformationEPS", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_PurgeMS_Arg: $.ASN1Decoder<PurgeMS_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PurgeMS_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PurgeMS_Arg (el: _Element): PurgeMS_Arg {
    if (!_cached_decoder_for_PurgeMS_Arg) { _cached_decoder_for_PurgeMS_Arg = $._decode_implicit<PurgeMS_Arg>(() => function (el: _Element): PurgeMS_Arg {
    let imsi!: IMSI;
    let vlr_Number: OPTIONAL<ISDN_AddressString> = undefined;
    let sgsn_Number: OPTIONAL<ISDN_AddressString> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let locationInformation: OPTIONAL<LocationInformation> = undefined;
    let locationInformationGPRS: OPTIONAL<LocationInformationGPRS> = undefined;
    let locationInformationEPS: OPTIONAL<LocationInformationEPS> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = _decode_IMSI(_el); },
        "vlr-Number": (_el: _Element): void => { vlr_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "sgsn-Number": (_el: _Element): void => { sgsn_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "locationInformation": (_el: _Element): void => { locationInformation = $._decode_implicit<LocationInformation>(() => _decode_LocationInformation)(_el); },
        "locationInformationGPRS": (_el: _Element): void => { locationInformationGPRS = $._decode_implicit<LocationInformationGPRS>(() => _decode_LocationInformationGPRS)(_el); },
        "locationInformationEPS": (_el: _Element): void => { locationInformationEPS = $._decode_implicit<LocationInformationEPS>(() => _decode_LocationInformationEPS)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PurgeMS_Arg,
        _extension_additions_list_spec_for_PurgeMS_Arg,
        _root_component_type_list_2_spec_for_PurgeMS_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PurgeMS_Arg(
        imsi,
        vlr_Number,
        sgsn_Number,
        extensionContainer,
        locationInformation,
        locationInformationGPRS,
        locationInformationEPS,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_PurgeMS_Arg(el);
}

let _cached_encoder_for_PurgeMS_Arg: $.ASN1Encoder<PurgeMS_Arg> | null = null;

/**
 * @summary Encodes a(n) PurgeMS_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PurgeMS_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_PurgeMS_Arg (value: PurgeMS_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PurgeMS_Arg) { _cached_encoder_for_PurgeMS_Arg = $._encode_implicit(_TagClass.context, 3, () => function (value: PurgeMS_Arg, elGetter: $.ASN1Encoder<PurgeMS_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IMSI(value.imsi, $.BER),
            /* IF_ABSENT  */ ((value.vlr_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER)(value.vlr_Number, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.sgsn_Number, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.locationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LocationInformation, $.BER)(value.locationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.locationInformationGPRS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_LocationInformationGPRS, $.BER)(value.locationInformationGPRS, $.BER)),
            /* IF_ABSENT  */ ((value.locationInformationEPS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_LocationInformationEPS, $.BER)(value.locationInformationEPS, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_PurgeMS_Arg(value, elGetter);
}


/* eslint-enable */

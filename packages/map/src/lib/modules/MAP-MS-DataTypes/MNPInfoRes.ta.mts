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
import { RouteingNumber, _decode_RouteingNumber, _encode_RouteingNumber } from "../MAP-MS-DataTypes/RouteingNumber.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { NumberPortabilityStatus, _enum_for_NumberPortabilityStatus, NumberPortabilityStatus_notKnownToBePorted /* IMPORTED_LONG_ENUMERATION_ITEM */, notKnownToBePorted /* IMPORTED_SHORT_ENUMERATION_ITEM */, NumberPortabilityStatus_ownNumberPortedOut /* IMPORTED_LONG_ENUMERATION_ITEM */, ownNumberPortedOut /* IMPORTED_SHORT_ENUMERATION_ITEM */, NumberPortabilityStatus_foreignNumberPortedToForeignNetwork /* IMPORTED_LONG_ENUMERATION_ITEM */, foreignNumberPortedToForeignNetwork /* IMPORTED_SHORT_ENUMERATION_ITEM */, NumberPortabilityStatus_ownNumberNotPortedOut /* IMPORTED_LONG_ENUMERATION_ITEM */, ownNumberNotPortedOut /* IMPORTED_SHORT_ENUMERATION_ITEM */, NumberPortabilityStatus_foreignNumberPortedIn /* IMPORTED_LONG_ENUMERATION_ITEM */, foreignNumberPortedIn /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NumberPortabilityStatus, _encode_NumberPortabilityStatus } from "../MAP-MS-DataTypes/NumberPortabilityStatus.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary MNPInfoRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MNPInfoRes ::= SEQUENCE {
 *     routeingNumber    [0] RouteingNumber    OPTIONAL,
 *     imsi    [1] IMSI    OPTIONAL,
 *     msisdn    [2] ISDN-AddressString    OPTIONAL,
 *     numberPortabilityStatus    [3] NumberPortabilityStatus    OPTIONAL,
 *     extensionContainer    [4] ExtensionContainer    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class MNPInfoRes {
    constructor (
        /**
         * @summary `routeingNumber`.
         * @public
         * @readonly
         */
        readonly routeingNumber: OPTIONAL<RouteingNumber>,
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `numberPortabilityStatus`.
         * @public
         * @readonly
         */
        readonly numberPortabilityStatus: OPTIONAL<NumberPortabilityStatus>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MNPInfoRes
     * @description
     * 
     * This takes an `object` and converts it to a `MNPInfoRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MNPInfoRes`.
     * @returns {MNPInfoRes}
     */
    public static _from_object (_o: { [_K in keyof (MNPInfoRes)]: (MNPInfoRes)[_K] }): MNPInfoRes {
        return new MNPInfoRes(_o.routeingNumber, _o.imsi, _o.msisdn, _o.numberPortabilityStatus, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `numberPortabilityStatus`
         * @public
         * @static
         */

    public static _enum_for_numberPortabilityStatus = _enum_for_NumberPortabilityStatus;
}

/**
 * @summary The Leading Root Component Types of MNPInfoRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MNPInfoRes: $.ComponentSpec[] = [
    new $.ComponentSpec("routeingNumber", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("msisdn", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("numberPortabilityStatus", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of MNPInfoRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MNPInfoRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MNPInfoRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MNPInfoRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MNPInfoRes: $.ASN1Decoder<MNPInfoRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MNPInfoRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MNPInfoRes (el: _Element): MNPInfoRes {
    if (!_cached_decoder_for_MNPInfoRes) { _cached_decoder_for_MNPInfoRes = function (el: _Element): MNPInfoRes {
    let routeingNumber: OPTIONAL<RouteingNumber> = undefined;
    let imsi: OPTIONAL<IMSI> = undefined;
    let msisdn: OPTIONAL<ISDN_AddressString> = undefined;
    let numberPortabilityStatus: OPTIONAL<NumberPortabilityStatus> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "routeingNumber": (_el: _Element): void => { routeingNumber = $._decode_implicit<RouteingNumber>(() => _decode_RouteingNumber)(_el); },
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "numberPortabilityStatus": (_el: _Element): void => { numberPortabilityStatus = $._decode_implicit<NumberPortabilityStatus>(() => _decode_NumberPortabilityStatus)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MNPInfoRes,
        _extension_additions_list_spec_for_MNPInfoRes,
        _root_component_type_list_2_spec_for_MNPInfoRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MNPInfoRes(
        routeingNumber,
        imsi,
        msisdn,
        numberPortabilityStatus,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MNPInfoRes(el);
}

let _cached_encoder_for_MNPInfoRes: $.ASN1Encoder<MNPInfoRes> | null = null;

/**
 * @summary Encodes a(n) MNPInfoRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MNPInfoRes, encoded as an ASN.1 Element.
 */
export
function _encode_MNPInfoRes (value: MNPInfoRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MNPInfoRes) { _cached_encoder_for_MNPInfoRes = function (value: MNPInfoRes, elGetter: $.ASN1Encoder<MNPInfoRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.routeingNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_RouteingNumber, $.BER)(value.routeingNumber, $.BER)),
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.msisdn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER)),
            /* IF_ABSENT  */ ((value.numberPortabilityStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NumberPortabilityStatus, $.BER)(value.numberPortabilityStatus, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MNPInfoRes(value, elGetter);
}


/* eslint-enable */

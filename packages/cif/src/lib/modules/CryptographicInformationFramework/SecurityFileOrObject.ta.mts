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
import { Label, _decode_Label, _encode_Label } from "../CryptographicInformationFramework/Label.ta.mjs";
// export { Label, _decode_Label, _encode_Label } from "../CryptographicInformationFramework/Label.ta.mjs";
import { CommunicationMode, CommunicationMode_contact /* IMPORTED_LONG_NAMED_BIT */, contact /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_contactLess /* IMPORTED_LONG_NAMED_BIT */, contactLess /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_usb /* IMPORTED_LONG_NAMED_BIT */, usb /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_nfc /* IMPORTED_LONG_NAMED_BIT */, nfc /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_contactC6 /* IMPORTED_LONG_NAMED_BIT */, contactC6 /* IMPORTED_SHORT_NAMED_BIT */, _decode_CommunicationMode, _encode_CommunicationMode } from "../CryptographicInformationFramework/CommunicationMode.ta.mjs";
// export { CommunicationMode, CommunicationMode_contact /* IMPORTED_LONG_NAMED_BIT */, contact /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_contactLess /* IMPORTED_LONG_NAMED_BIT */, contactLess /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_usb /* IMPORTED_LONG_NAMED_BIT */, usb /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_nfc /* IMPORTED_LONG_NAMED_BIT */, nfc /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_contactC6 /* IMPORTED_LONG_NAMED_BIT */, contactC6 /* IMPORTED_SHORT_NAMED_BIT */, _decode_CommunicationMode, _encode_CommunicationMode } from "../CryptographicInformationFramework/CommunicationMode.ta.mjs";
import { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";
// export { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";


/**
 * @summary SecurityFileOrObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityFileOrObject ::= SEQUENCE {
 *     label               Label OPTIONAL,
 *     communicationMode   CommunicationMode OPTIONAL,
 *     fileOrObjectPath    Path,
 *     protocol            OBJECT IDENTIFIER OPTIONAL,
 *     cioSecurityId       INTEGER OPTIONAL,
 *     index               [0] INTEGER (0..cia-ub-index) OPTIONAL,
 *     precondition        [1] INTEGER (0..cia-ub-index) OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class SecurityFileOrObject {
    constructor (
        /**
         * @summary `label`.
         * @public
         * @readonly
         */
        readonly label: OPTIONAL<Label>,
        /**
         * @summary `communicationMode`.
         * @public
         * @readonly
         */
        readonly communicationMode: OPTIONAL<CommunicationMode>,
        /**
         * @summary `fileOrObjectPath`.
         * @public
         * @readonly
         */
        readonly fileOrObjectPath: Path,
        /**
         * @summary `protocol`.
         * @public
         * @readonly
         */
        readonly protocol: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `cioSecurityId`.
         * @public
         * @readonly
         */
        readonly cioSecurityId: OPTIONAL<INTEGER>,
        /**
         * @summary `index`.
         * @public
         * @readonly
         */
        readonly index: OPTIONAL<INTEGER>,
        /**
         * @summary `precondition`.
         * @public
         * @readonly
         */
        readonly precondition: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SecurityFileOrObject
     * @description
     * 
     * This takes an `object` and converts it to a `SecurityFileOrObject`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityFileOrObject`.
     * @returns {SecurityFileOrObject}
     */
    public static _from_object (_o: { [_K in keyof (SecurityFileOrObject)]: (SecurityFileOrObject)[_K] }): SecurityFileOrObject {
        return new SecurityFileOrObject(_o.label, _o.communicationMode, _o.fileOrObjectPath, _o.protocol, _o.cioSecurityId, _o.index, _o.precondition, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SecurityFileOrObject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SecurityFileOrObject: $.ComponentSpec[] = [
    new $.ComponentSpec("label", true, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("communicationMode", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("fileOrObjectPath", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("protocol", true, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("cioSecurityId", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("index", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("precondition", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SecurityFileOrObject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SecurityFileOrObject: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SecurityFileOrObject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SecurityFileOrObject: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SecurityFileOrObject: $.ASN1Decoder<SecurityFileOrObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityFileOrObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityFileOrObject (el: _Element): SecurityFileOrObject {
    if (!_cached_decoder_for_SecurityFileOrObject) { _cached_decoder_for_SecurityFileOrObject = function (el: _Element): SecurityFileOrObject {
    let label: OPTIONAL<Label>;
    let communicationMode: OPTIONAL<CommunicationMode>;
    let fileOrObjectPath!: Path;
    let protocol: OPTIONAL<OBJECT_IDENTIFIER>;
    let cioSecurityId: OPTIONAL<INTEGER>;
    let index: OPTIONAL<INTEGER>;
    let precondition: OPTIONAL<INTEGER>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "label": (_el: _Element): void => { label = _decode_Label(_el); },
        "communicationMode": (_el: _Element): void => { communicationMode = _decode_CommunicationMode(_el); },
        "fileOrObjectPath": (_el: _Element): void => { fileOrObjectPath = _decode_Path(_el); },
        "protocol": (_el: _Element): void => { protocol = $._decodeObjectIdentifier(_el); },
        "cioSecurityId": (_el: _Element): void => { cioSecurityId = $._decodeInteger(_el); },
        "index": (_el: _Element): void => { index = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "precondition": (_el: _Element): void => { precondition = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SecurityFileOrObject,
        _extension_additions_list_spec_for_SecurityFileOrObject,
        _root_component_type_list_2_spec_for_SecurityFileOrObject,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SecurityFileOrObject(
        label,
        communicationMode,
        fileOrObjectPath,
        protocol,
        cioSecurityId,
        index,
        precondition,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SecurityFileOrObject(el);
}

let _cached_encoder_for_SecurityFileOrObject: $.ASN1Encoder<SecurityFileOrObject> | null = null;

/**
 * @summary Encodes a(n) SecurityFileOrObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityFileOrObject, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityFileOrObject (value: SecurityFileOrObject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityFileOrObject) { _cached_encoder_for_SecurityFileOrObject = function (value: SecurityFileOrObject, elGetter: $.ASN1Encoder<SecurityFileOrObject>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.label === undefined) ? undefined : _encode_Label(value.label, $.BER)),
            /* IF_ABSENT  */ ((value.communicationMode === undefined) ? undefined : _encode_CommunicationMode(value.communicationMode, $.BER)),
            /* REQUIRED   */ _encode_Path(value.fileOrObjectPath, $.BER),
            /* IF_ABSENT  */ ((value.protocol === undefined) ? undefined : $._encodeObjectIdentifier(value.protocol, $.BER)),
            /* IF_ABSENT  */ ((value.cioSecurityId === undefined) ? undefined : $._encodeInteger(value.cioSecurityId, $.BER)),
            /* IF_ABSENT  */ ((value.index === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.index, $.BER)),
            /* IF_ABSENT  */ ((value.precondition === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.precondition, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SecurityFileOrObject(value, elGetter);
}


/* eslint-enable */

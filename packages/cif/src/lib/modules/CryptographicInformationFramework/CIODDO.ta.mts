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
import { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";
// export { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";
import { SecurityFileOrObject, _decode_SecurityFileOrObject, _encode_SecurityFileOrObject } from "../CryptographicInformationFramework/SecurityFileOrObject.ta.mjs";
// export { SecurityFileOrObject, _decode_SecurityFileOrObject, _encode_SecurityFileOrObject } from "../CryptographicInformationFramework/SecurityFileOrObject.ta.mjs";


/**
 * @summary CIODDO
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIODDO ::= SEQUENCE {
 *     providerId              OBJECT IDENTIFIER OPTIONAL,
 *     odfPath                 Path OPTIONAL,
 *     ciaInfoPath             [0] Path OPTIONAL,
 *     aid                     [APPLICATION 15] OCTET STRING (CONSTRAINED BY {-- Must be an AID in accordance with ISO/IEC 7816-4--}) OPTIONAL,
 *     securityFileOrObject    SET OF SecurityFileOrObject OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class CIODDO {
    constructor (
        /**
         * @summary `providerId`.
         * @public
         * @readonly
         */
        readonly providerId: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `odfPath`.
         * @public
         * @readonly
         */
        readonly odfPath: OPTIONAL<Path>,
        /**
         * @summary `ciaInfoPath`.
         * @public
         * @readonly
         */
        readonly ciaInfoPath: OPTIONAL<Path>,
        /**
         * @summary `aid`.
         * @public
         * @readonly
         */
        readonly aid: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `securityFileOrObject`.
         * @public
         * @readonly
         */
        readonly securityFileOrObject: OPTIONAL<SecurityFileOrObject[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CIODDO
     * @description
     * 
     * This takes an `object` and converts it to a `CIODDO`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CIODDO`.
     * @returns {CIODDO}
     */
    public static _from_object (_o: { [_K in keyof (CIODDO)]: (CIODDO)[_K] }): CIODDO {
        return new CIODDO(_o.providerId, _o.odfPath, _o.ciaInfoPath, _o.aid, _o.securityFileOrObject, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CIODDO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CIODDO: $.ComponentSpec[] = [
    new $.ComponentSpec("providerId", true, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("odfPath", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("ciaInfoPath", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("aid", true, $.hasTag(_TagClass.application, 15)),
    new $.ComponentSpec("securityFileOrObject", true, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of CIODDO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CIODDO: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CIODDO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CIODDO: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CIODDO: $.ASN1Decoder<CIODDO> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CIODDO
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CIODDO (el: _Element): CIODDO {
    if (!_cached_decoder_for_CIODDO) { _cached_decoder_for_CIODDO = function (el: _Element): CIODDO {
    let providerId: OPTIONAL<OBJECT_IDENTIFIER>;
    let odfPath: OPTIONAL<Path>;
    let ciaInfoPath: OPTIONAL<Path>;
    let aid: OPTIONAL<OCTET_STRING>;
    let securityFileOrObject: OPTIONAL<SecurityFileOrObject[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "providerId": (_el: _Element): void => { providerId = $._decodeObjectIdentifier(_el); },
        "odfPath": (_el: _Element): void => { odfPath = _decode_Path(_el); },
        "ciaInfoPath": (_el: _Element): void => { ciaInfoPath = $._decode_implicit<Path>(() => _decode_Path)(_el); },
        "aid": (_el: _Element): void => { aid = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "securityFileOrObject": (_el: _Element): void => { securityFileOrObject = $._decodeSetOf<SecurityFileOrObject>(() => _decode_SecurityFileOrObject)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CIODDO,
        _extension_additions_list_spec_for_CIODDO,
        _root_component_type_list_2_spec_for_CIODDO,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CIODDO(
        providerId,
        odfPath,
        ciaInfoPath,
        aid,
        securityFileOrObject,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CIODDO(el);
}

let _cached_encoder_for_CIODDO: $.ASN1Encoder<CIODDO> | null = null;

/**
 * @summary Encodes a(n) CIODDO into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CIODDO, encoded as an ASN.1 Element.
 */
export
function _encode_CIODDO (value: CIODDO, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CIODDO) { _cached_encoder_for_CIODDO = function (value: CIODDO, elGetter: $.ASN1Encoder<CIODDO>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.providerId === undefined) ? undefined : $._encodeObjectIdentifier(value.providerId, $.BER)),
            /* IF_ABSENT  */ ((value.odfPath === undefined) ? undefined : _encode_Path(value.odfPath, $.BER)),
            /* IF_ABSENT  */ ((value.ciaInfoPath === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Path, $.BER)(value.ciaInfoPath, $.BER)),
            /* IF_ABSENT  */ ((value.aid === undefined) ? undefined : $._encode_implicit(_TagClass.application, 15, () => $._encodeOctetString, $.BER)(value.aid, $.BER)),
            /* IF_ABSENT  */ ((value.securityFileOrObject === undefined) ? undefined : $._encodeSetOf<SecurityFileOrObject>(() => _encode_SecurityFileOrObject, $.BER)(value.securityFileOrObject, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CIODDO(value, elGetter);
}


/* eslint-enable */

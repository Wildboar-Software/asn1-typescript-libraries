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



/**
 * @summary CCOupdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCOupdate ::= SEQUENCE {
 *     kCoordinate         [0] IMPLICIT INTEGER,
 *     fCoordinate         [1] IMPLICIT INTEGER,
 *     zCoordinate         [2] IMPLICIT INTEGER OPTIONAL,
 *     -- required when VT-dirnensions="three
 *     entryControlIndex   [3] IMPLICIT INTEGER OPTIONAL,
 *     deviceObjectIndex   [4] IMPLICIT INTEGER OPTIONAL,
 *     feprIndex           [5] IMPLICIT INTEGER OPTIONAL
 *     -- Items with tags [3], [4] and [5] are required on termination update.
 *     -- See ISO/IEC 9040.
 * }
 * ```
 * 
 * @class
 */
export
class CCOupdate {
    constructor (
        /**
         * @summary `kCoordinate`.
         * @public
         * @readonly
         */
        readonly kCoordinate: INTEGER,
        /**
         * @summary `fCoordinate`.
         * @public
         * @readonly
         */
        readonly fCoordinate: INTEGER,
        /**
         * @summary `zCoordinate`.
         * @public
         * @readonly
         */
        readonly zCoordinate: OPTIONAL<INTEGER>,
        /**
         * @summary `entryControlIndex`.
         * @public
         * @readonly
         */
        readonly entryControlIndex: OPTIONAL<INTEGER>,
        /**
         * @summary `deviceObjectIndex`.
         * @public
         * @readonly
         */
        readonly deviceObjectIndex: OPTIONAL<INTEGER>,
        /**
         * @summary `feprIndex`.
         * @public
         * @readonly
         */
        readonly feprIndex: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a CCOupdate
     * @description
     * 
     * This takes an `object` and converts it to a `CCOupdate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CCOupdate`.
     * @returns {CCOupdate}
     */
    public static _from_object (_o: { [_K in keyof (CCOupdate)]: (CCOupdate)[_K] }): CCOupdate {
        return new CCOupdate(_o.kCoordinate, _o.fCoordinate, _o.zCoordinate, _o.entryControlIndex, _o.deviceObjectIndex, _o.feprIndex);
    }


}

/**
 * @summary The Leading Root Component Types of CCOupdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CCOupdate: $.ComponentSpec[] = [
    new $.ComponentSpec("kCoordinate", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fCoordinate", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("zCoordinate", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("entryControlIndex", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("deviceObjectIndex", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("feprIndex", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of CCOupdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CCOupdate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CCOupdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CCOupdate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CCOupdate: $.ASN1Decoder<CCOupdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCOupdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCOupdate (el: _Element): CCOupdate {
    if (!_cached_decoder_for_CCOupdate) { _cached_decoder_for_CCOupdate = function (el: _Element): CCOupdate {
    let kCoordinate!: INTEGER;
    let fCoordinate!: INTEGER;
    let zCoordinate: OPTIONAL<INTEGER>;
    let entryControlIndex: OPTIONAL<INTEGER>;
    let deviceObjectIndex: OPTIONAL<INTEGER>;
    let feprIndex: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "kCoordinate": (_el: _Element): void => { kCoordinate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "fCoordinate": (_el: _Element): void => { fCoordinate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "zCoordinate": (_el: _Element): void => { zCoordinate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "entryControlIndex": (_el: _Element): void => { entryControlIndex = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "deviceObjectIndex": (_el: _Element): void => { deviceObjectIndex = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "feprIndex": (_el: _Element): void => { feprIndex = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CCOupdate,
        _extension_additions_list_spec_for_CCOupdate,
        _root_component_type_list_2_spec_for_CCOupdate,
        undefined,
    );
    return new CCOupdate(
        kCoordinate,
        fCoordinate,
        zCoordinate,
        entryControlIndex,
        deviceObjectIndex,
        feprIndex
    );
}; }
    return _cached_decoder_for_CCOupdate(el);
}

let _cached_encoder_for_CCOupdate: $.ASN1Encoder<CCOupdate> | null = null;

/**
 * @summary Encodes a(n) CCOupdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCOupdate, encoded as an ASN.1 Element.
 */
export
function _encode_CCOupdate (value: CCOupdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCOupdate) { _cached_encoder_for_CCOupdate = function (value: CCOupdate, elGetter: $.ASN1Encoder<CCOupdate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.kCoordinate, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.fCoordinate, $.BER),
            /* IF_ABSENT  */ ((value.zCoordinate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.zCoordinate, $.BER)),
            /* IF_ABSENT  */ ((value.entryControlIndex === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.entryControlIndex, $.BER)),
            /* IF_ABSENT  */ ((value.deviceObjectIndex === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.deviceObjectIndex, $.BER)),
            /* IF_ABSENT  */ ((value.feprIndex === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.feprIndex, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CCOupdate(value, elGetter);
}


/* eslint-enable */

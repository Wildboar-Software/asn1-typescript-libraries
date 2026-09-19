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
import { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../HI2Operations/PartyInformation.ta.mjs";
// export { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../HI2Operations/PartyInformation.ta.mjs";


/**
 * @summary Change_Of_Target_Identity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Change-Of-Target-Identity ::= SEQUENCE
 * {
 *  new-MSISDN [1] PartyInformation OPTIONAL,
 *  -- new MSISDN of the target, encoded in the same format as the AddressString
 *  -- parameters defined in MAP format document TS 29.002 [4]
 *  new-A-MSISDN [2] PartyInformation OPTIONAL,
 *  -- new A-MSISDN of the target, encoded in the same format as the AddressString
 *  -- parameters defined in TS 23.003 [25]
 *  old-MSISDN [3] PartyInformation OPTIONAL,
 *  -- old MSISDN of the target, encoded in the same format as the AddressString
 *  -- parameters defined in MAP format document TS 29.002 [4]
 *  old-A-MSISDN [4] PartyInformation OPTIONAL,
 *  -- old A-MSISDN of the target, encoded in the same format as the AddressString
 *  -- parameters defined in TS 23.003 [25]
 *  new-IMSI [5] PartyInformation OPTIONAL,
 *  -- See MAP format [4] International Mobile
 *  -- Station Identity E.212 number beginning with Mobile Country Code
 *  old-IMSI [6] PartyInformation OPTIONAL,
 *  -- See MAP format [4] International Mobile
 *  -- Station Identity E.212 number beginning with Mobile Country Code
 *  new-IMEI [7] PartyInformation OPTIONAL,
 *  -- See MAP format [4] International Mobile
 *  -- Equipement Identity defined in MAP format document TS 29.002 [4]
 *  old-IMEI [8] PartyInformation OPTIONAL,
 *  -- See MAP format [4] International Mobile
 *  -- Equipement Identity defined in MAP format document TS 29.002 [4]
 * ...,
 *  new-IMPI [9] PartyInformation OPTIONAL,
 *  old-IMPI [10] PartyInformation OPTIONAL,
 *  new-SIP-URI [11] PartyInformation OPTIONAL,
 *  old-SIP-URI [12] PartyInformation OPTIONAL,
 *  new-TEL-URI [13] PartyInformation OPTIONAL,
 *  old-TEL-URI [14] PartyInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Change_Of_Target_Identity {
    constructor (
        /**
         * @summary `new_MSISDN`.
         * @public
         * @readonly
         */
        readonly new_MSISDN: OPTIONAL<PartyInformation>,
        /**
         * @summary `new_A_MSISDN`.
         * @public
         * @readonly
         */
        readonly new_A_MSISDN: OPTIONAL<PartyInformation>,
        /**
         * @summary `old_MSISDN`.
         * @public
         * @readonly
         */
        readonly old_MSISDN: OPTIONAL<PartyInformation>,
        /**
         * @summary `old_A_MSISDN`.
         * @public
         * @readonly
         */
        readonly old_A_MSISDN: OPTIONAL<PartyInformation>,
        /**
         * @summary `new_IMSI`.
         * @public
         * @readonly
         */
        readonly new_IMSI: OPTIONAL<PartyInformation>,
        /**
         * @summary `old_IMSI`.
         * @public
         * @readonly
         */
        readonly old_IMSI: OPTIONAL<PartyInformation>,
        /**
         * @summary `new_IMEI`.
         * @public
         * @readonly
         */
        readonly new_IMEI: OPTIONAL<PartyInformation>,
        /**
         * @summary `old_IMEI`.
         * @public
         * @readonly
         */
        readonly old_IMEI: OPTIONAL<PartyInformation>,
        /**
         * @summary `new_IMPI`.
         * @public
         * @readonly
         */
        readonly new_IMPI: OPTIONAL<PartyInformation>,
        /**
         * @summary `old_IMPI`.
         * @public
         * @readonly
         */
        readonly old_IMPI: OPTIONAL<PartyInformation>,
        /**
         * @summary `new_SIP_URI`.
         * @public
         * @readonly
         */
        readonly new_SIP_URI: OPTIONAL<PartyInformation>,
        /**
         * @summary `old_SIP_URI`.
         * @public
         * @readonly
         */
        readonly old_SIP_URI: OPTIONAL<PartyInformation>,
        /**
         * @summary `new_TEL_URI`.
         * @public
         * @readonly
         */
        readonly new_TEL_URI: OPTIONAL<PartyInformation>,
        /**
         * @summary `old_TEL_URI`.
         * @public
         * @readonly
         */
        readonly old_TEL_URI: OPTIONAL<PartyInformation>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Change_Of_Target_Identity
     * @description
     * 
     * This takes an `object` and converts it to a `Change_Of_Target_Identity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Change_Of_Target_Identity`.
     * @returns {Change_Of_Target_Identity}
     */
    public static _from_object (_o: { [_K in keyof (Change_Of_Target_Identity)]: (Change_Of_Target_Identity)[_K] }): Change_Of_Target_Identity {
        return new Change_Of_Target_Identity(_o.new_MSISDN, _o.new_A_MSISDN, _o.old_MSISDN, _o.old_A_MSISDN, _o.new_IMSI, _o.old_IMSI, _o.new_IMEI, _o.old_IMEI, _o.new_IMPI, _o.old_IMPI, _o.new_SIP_URI, _o.old_SIP_URI, _o.new_TEL_URI, _o.old_TEL_URI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Change_Of_Target_Identity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Change_Of_Target_Identity: $.ComponentSpec[] = [
    new $.ComponentSpec("new-MSISDN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("new-A-MSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("old-MSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("old-A-MSISDN", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("new-IMSI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("old-IMSI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("new-IMEI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("old-IMEI", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of Change_Of_Target_Identity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Change_Of_Target_Identity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Change_Of_Target_Identity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Change_Of_Target_Identity: $.ComponentSpec[] = [
    new $.ComponentSpec("new-IMPI", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("old-IMPI", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("new-SIP-URI", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("old-SIP-URI", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("new-TEL-URI", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("old-TEL-URI", true, $.hasTag(_TagClass.context, 14))
];

let _cached_decoder_for_Change_Of_Target_Identity: $.ASN1Decoder<Change_Of_Target_Identity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Change_Of_Target_Identity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Change_Of_Target_Identity (el: _Element): Change_Of_Target_Identity {
    if (!_cached_decoder_for_Change_Of_Target_Identity) { _cached_decoder_for_Change_Of_Target_Identity = function (el: _Element): Change_Of_Target_Identity {
    let new_MSISDN: OPTIONAL<PartyInformation>;
    let new_A_MSISDN: OPTIONAL<PartyInformation>;
    let old_MSISDN: OPTIONAL<PartyInformation>;
    let old_A_MSISDN: OPTIONAL<PartyInformation>;
    let new_IMSI: OPTIONAL<PartyInformation>;
    let old_IMSI: OPTIONAL<PartyInformation>;
    let new_IMEI: OPTIONAL<PartyInformation>;
    let old_IMEI: OPTIONAL<PartyInformation>;
    let new_IMPI: OPTIONAL<PartyInformation>;
    let old_IMPI: OPTIONAL<PartyInformation>;
    let new_SIP_URI: OPTIONAL<PartyInformation>;
    let old_SIP_URI: OPTIONAL<PartyInformation>;
    let new_TEL_URI: OPTIONAL<PartyInformation>;
    let old_TEL_URI: OPTIONAL<PartyInformation>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "new-MSISDN": (_el: _Element): void => { new_MSISDN = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "new-A-MSISDN": (_el: _Element): void => { new_A_MSISDN = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-MSISDN": (_el: _Element): void => { old_MSISDN = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-A-MSISDN": (_el: _Element): void => { old_A_MSISDN = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "new-IMSI": (_el: _Element): void => { new_IMSI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-IMSI": (_el: _Element): void => { old_IMSI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "new-IMEI": (_el: _Element): void => { new_IMEI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-IMEI": (_el: _Element): void => { old_IMEI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "new-IMPI": (_el: _Element): void => { new_IMPI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-IMPI": (_el: _Element): void => { old_IMPI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "new-SIP-URI": (_el: _Element): void => { new_SIP_URI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-SIP-URI": (_el: _Element): void => { old_SIP_URI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "new-TEL-URI": (_el: _Element): void => { new_TEL_URI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); },
        "old-TEL-URI": (_el: _Element): void => { old_TEL_URI = $._decode_implicit<PartyInformation>(() => _decode_PartyInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Change_Of_Target_Identity,
        _extension_additions_list_spec_for_Change_Of_Target_Identity,
        _root_component_type_list_2_spec_for_Change_Of_Target_Identity,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Change_Of_Target_Identity(
        new_MSISDN,
        new_A_MSISDN,
        old_MSISDN,
        old_A_MSISDN,
        new_IMSI,
        old_IMSI,
        new_IMEI,
        old_IMEI,
        new_IMPI,
        old_IMPI,
        new_SIP_URI,
        old_SIP_URI,
        new_TEL_URI,
        old_TEL_URI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Change_Of_Target_Identity(el);
}

let _cached_encoder_for_Change_Of_Target_Identity: $.ASN1Encoder<Change_Of_Target_Identity> | null = null;

/**
 * @summary Encodes a(n) Change_Of_Target_Identity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Change_Of_Target_Identity, encoded as an ASN.1 Element.
 */
export
function _encode_Change_Of_Target_Identity (value: Change_Of_Target_Identity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Change_Of_Target_Identity) { _cached_encoder_for_Change_Of_Target_Identity = function (value: Change_Of_Target_Identity, elGetter: $.ASN1Encoder<Change_Of_Target_Identity>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.new_MSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PartyInformation, $.BER)(value.new_MSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.new_A_MSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PartyInformation, $.BER)(value.new_A_MSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.old_MSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PartyInformation, $.BER)(value.old_MSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.old_A_MSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_PartyInformation, $.BER)(value.old_A_MSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.new_IMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PartyInformation, $.BER)(value.new_IMSI, $.BER)),
            /* IF_ABSENT  */ ((value.old_IMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_PartyInformation, $.BER)(value.old_IMSI, $.BER)),
            /* IF_ABSENT  */ ((value.new_IMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_PartyInformation, $.BER)(value.new_IMEI, $.BER)),
            /* IF_ABSENT  */ ((value.old_IMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_PartyInformation, $.BER)(value.old_IMEI, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.new_IMPI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_PartyInformation, $.BER)(value.new_IMPI, $.BER)),
            /* IF_ABSENT  */ ((value.old_IMPI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_PartyInformation, $.BER)(value.old_IMPI, $.BER)),
            /* IF_ABSENT  */ ((value.new_SIP_URI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_PartyInformation, $.BER)(value.new_SIP_URI, $.BER)),
            /* IF_ABSENT  */ ((value.old_SIP_URI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_PartyInformation, $.BER)(value.old_SIP_URI, $.BER)),
            /* IF_ABSENT  */ ((value.new_TEL_URI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_PartyInformation, $.BER)(value.new_TEL_URI, $.BER)),
            /* IF_ABSENT  */ ((value.old_TEL_URI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_PartyInformation, $.BER)(value.old_TEL_URI, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Change_Of_Target_Identity(value, elGetter);
}


/* eslint-enable */

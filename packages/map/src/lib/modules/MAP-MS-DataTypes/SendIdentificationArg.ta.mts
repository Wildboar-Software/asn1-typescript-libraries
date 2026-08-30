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
import { TMSI, _decode_TMSI, _encode_TMSI } from "../MAP-CommonDataTypes/TMSI.ta.mjs";
// export { TMSI, _decode_TMSI, _encode_TMSI } from "../MAP-CommonDataTypes/TMSI.ta.mjs";
import { NumberOfRequestedVectors, _decode_NumberOfRequestedVectors, _encode_NumberOfRequestedVectors } from "../MAP-MS-DataTypes/NumberOfRequestedVectors.ta.mjs";
// export { NumberOfRequestedVectors, _decode_NumberOfRequestedVectors, _encode_NumberOfRequestedVectors } from "../MAP-MS-DataTypes/NumberOfRequestedVectors.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { LAIFixedLength, _decode_LAIFixedLength, _encode_LAIFixedLength } from "../MAP-CommonDataTypes/LAIFixedLength.ta.mjs";
// export { LAIFixedLength, _decode_LAIFixedLength, _encode_LAIFixedLength } from "../MAP-CommonDataTypes/LAIFixedLength.ta.mjs";
import { HopCounter, _decode_HopCounter, _encode_HopCounter } from "../MAP-MS-DataTypes/HopCounter.ta.mjs";
// export { HopCounter, _decode_HopCounter, _encode_HopCounter } from "../MAP-MS-DataTypes/HopCounter.ta.mjs";
import { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
// export { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";


/**
 * @summary SendIdentificationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendIdentificationArg ::= SEQUENCE {
 *     tmsi    TMSI,
 *     numberOfRequestedVectors    NumberOfRequestedVectors    OPTIONAL,
 *     -- within a dialogue numberOfRequestedVectors shall be present in 
 *     -- the first service request and shall not be present in subsequent service requests. 
 *     -- If received in a subsequent service request it shall be discarded. 
 *     segmentationProhibited    NULL    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     msc-Number    ISDN-AddressString    OPTIONAL,
 *     previous-LAI    [0] LAIFixedLength    OPTIONAL,
 *     hopCounter    [1] HopCounter    OPTIONAL,
 *     mtRoamingForwardingSupported    [2] NULL    OPTIONAL,
 *     newVLR-Number    [3] ISDN-AddressString    OPTIONAL,
 *     new-lmsi    [4] LMSI    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SendIdentificationArg {
    constructor (
        /**
         * @summary `tmsi`.
         * @public
         * @readonly
         */
        readonly tmsi: TMSI,
        /**
         * @summary `numberOfRequestedVectors`.
         * @public
         * @readonly
         */
        readonly numberOfRequestedVectors: OPTIONAL<NumberOfRequestedVectors>,
        /**
         * @summary `segmentationProhibited`.
         * @public
         * @readonly
         */
        readonly segmentationProhibited: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `msc_Number`.
         * @public
         * @readonly
         */
        readonly msc_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `previous_LAI`.
         * @public
         * @readonly
         */
        readonly previous_LAI: OPTIONAL<LAIFixedLength>,
        /**
         * @summary `hopCounter`.
         * @public
         * @readonly
         */
        readonly hopCounter: OPTIONAL<HopCounter>,
        /**
         * @summary `mtRoamingForwardingSupported`.
         * @public
         * @readonly
         */
        readonly mtRoamingForwardingSupported: OPTIONAL<NULL>,
        /**
         * @summary `newVLR_Number`.
         * @public
         * @readonly
         */
        readonly newVLR_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `new_lmsi`.
         * @public
         * @readonly
         */
        readonly new_lmsi: OPTIONAL<LMSI>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SendIdentificationArg
     * @description
     * 
     * This takes an `object` and converts it to a `SendIdentificationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendIdentificationArg`.
     * @returns {SendIdentificationArg}
     */
    public static _from_object (_o: { [_K in keyof (SendIdentificationArg)]: (SendIdentificationArg)[_K] }): SendIdentificationArg {
        return new SendIdentificationArg(_o.tmsi, _o.numberOfRequestedVectors, _o.segmentationProhibited, _o.extensionContainer, _o.msc_Number, _o.previous_LAI, _o.hopCounter, _o.mtRoamingForwardingSupported, _o.newVLR_Number, _o.new_lmsi, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SendIdentificationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendIdentificationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("tmsi", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("numberOfRequestedVectors", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("segmentationProhibited", true, $.hasTag(_TagClass.universal, 5), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SendIdentificationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendIdentificationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendIdentificationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendIdentificationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("msc-Number", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("previous-LAI", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("hopCounter", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("mtRoamingForwardingSupported", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("newVLR-Number", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("new-lmsi", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

let _cached_decoder_for_SendIdentificationArg: $.ASN1Decoder<SendIdentificationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendIdentificationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendIdentificationArg (el: _Element): SendIdentificationArg {
    if (!_cached_decoder_for_SendIdentificationArg) { _cached_decoder_for_SendIdentificationArg = function (el: _Element): SendIdentificationArg {
    let tmsi!: TMSI;
    let numberOfRequestedVectors: OPTIONAL<NumberOfRequestedVectors>;
    let segmentationProhibited: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let msc_Number: OPTIONAL<ISDN_AddressString>;
    let previous_LAI: OPTIONAL<LAIFixedLength>;
    let hopCounter: OPTIONAL<HopCounter>;
    let mtRoamingForwardingSupported: OPTIONAL<NULL>;
    let newVLR_Number: OPTIONAL<ISDN_AddressString>;
    let new_lmsi: OPTIONAL<LMSI>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "tmsi": (_el: _Element): void => { tmsi = _decode_TMSI(_el); },
        "numberOfRequestedVectors": (_el: _Element): void => { numberOfRequestedVectors = _decode_NumberOfRequestedVectors(_el); },
        "segmentationProhibited": (_el: _Element): void => { segmentationProhibited = $._decodeNull(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "msc-Number": (_el: _Element): void => { msc_Number = _decode_ISDN_AddressString(_el); },
        "previous-LAI": (_el: _Element): void => { previous_LAI = $._decode_implicit<LAIFixedLength>(() => _decode_LAIFixedLength)(_el); },
        "hopCounter": (_el: _Element): void => { hopCounter = $._decode_implicit<HopCounter>(() => _decode_HopCounter)(_el); },
        "mtRoamingForwardingSupported": (_el: _Element): void => { mtRoamingForwardingSupported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "newVLR-Number": (_el: _Element): void => { newVLR_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "new-lmsi": (_el: _Element): void => { new_lmsi = $._decode_implicit<LMSI>(() => _decode_LMSI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendIdentificationArg,
        _extension_additions_list_spec_for_SendIdentificationArg,
        _root_component_type_list_2_spec_for_SendIdentificationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendIdentificationArg(
        tmsi,
        numberOfRequestedVectors,
        segmentationProhibited,
        extensionContainer,
        msc_Number,
        previous_LAI,
        hopCounter,
        mtRoamingForwardingSupported,
        newVLR_Number,
        new_lmsi,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SendIdentificationArg(el);
}

let _cached_encoder_for_SendIdentificationArg: $.ASN1Encoder<SendIdentificationArg> | null = null;

/**
 * @summary Encodes a(n) SendIdentificationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendIdentificationArg, encoded as an ASN.1 Element.
 */
export
function _encode_SendIdentificationArg (value: SendIdentificationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendIdentificationArg) { _cached_encoder_for_SendIdentificationArg = function (value: SendIdentificationArg, elGetter: $.ASN1Encoder<SendIdentificationArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TMSI(value.tmsi, $.BER),
            /* IF_ABSENT  */ ((value.numberOfRequestedVectors === undefined) ? undefined : _encode_NumberOfRequestedVectors(value.numberOfRequestedVectors, $.BER)),
            /* IF_ABSENT  */ ((value.segmentationProhibited === undefined) ? undefined : $._encodeNull(value.segmentationProhibited, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.msc_Number === undefined) ? undefined : _encode_ISDN_AddressString(value.msc_Number, $.BER)),
            /* IF_ABSENT  */ ((value.previous_LAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_LAIFixedLength, $.BER)(value.previous_LAI, $.BER)),
            /* IF_ABSENT  */ ((value.hopCounter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_HopCounter, $.BER)(value.hopCounter, $.BER)),
            /* IF_ABSENT  */ ((value.mtRoamingForwardingSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.mtRoamingForwardingSupported, $.BER)),
            /* IF_ABSENT  */ ((value.newVLR_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ISDN_AddressString, $.BER)(value.newVLR_Number, $.BER)),
            /* IF_ABSENT  */ ((value.new_lmsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_LMSI, $.BER)(value.new_lmsi, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendIdentificationArg(value, elGetter);
}


/* eslint-enable */

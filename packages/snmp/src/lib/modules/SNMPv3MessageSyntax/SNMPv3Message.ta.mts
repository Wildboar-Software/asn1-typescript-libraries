/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
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
import { HeaderData, _decode_HeaderData, _encode_HeaderData } from "../SNMPv3MessageSyntax/HeaderData.ta.mjs";
import { ScopedPduData, _decode_ScopedPduData, _encode_ScopedPduData } from "../SNMPv3MessageSyntax/ScopedPduData.ta.mjs";
/**
 * @summary SNMPv3Message
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SNMPv3Message ::= SEQUENCE {
 *         -- identify the layout of the SNMPv3Message
 *         -- this element is in same position as in SNMPv1
 *         -- and SNMPv2c, allowing recognition
 *         -- the value 3 is used for snmpv3
 *         msgVersion INTEGER ( 0 .. 2147483647 ),
 *         -- administrative parameters
 *         msgGlobalData HeaderData,
 *         -- security model-specific parameters
 *         -- format defined by Security Model
 *         msgSecurityParameters OCTET STRING,
 *         msgData  ScopedPduData
 *     }
 * ```
 *
 * @class
 */
export
class SNMPv3Message {
    constructor (
        /**
         * @summary `msgVersion`.
         * @public
         * @readonly
         */
        readonly msgVersion: INTEGER,
        /**
         * @summary `msgGlobalData`.
         * @public
         * @readonly
         */
        readonly msgGlobalData: HeaderData,
        /**
         * @summary `msgSecurityParameters`.
         * @public
         * @readonly
         */
        readonly msgSecurityParameters: OCTET_STRING,
        /**
         * @summary `msgData`.
         * @public
         * @readonly
         */
        readonly msgData: ScopedPduData
    ) {}

    /**
     * @summary Restructures an object into a SNMPv3Message
     * @description
     *
     * This takes an `object` and converts it to a `SNMPv3Message`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SNMPv3Message`.
     * @returns {SNMPv3Message}
     */
    public static _from_object (_o: { [_K in keyof (SNMPv3Message)]: (SNMPv3Message)[_K] }): SNMPv3Message {
        return new SNMPv3Message(_o.msgVersion, _o.msgGlobalData, _o.msgSecurityParameters, _o.msgData);
    }


}

/**
 * @summary The Leading Root Component Types of SNMPv3Message
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SNMPv3Message: $.ComponentSpec[] = [
    new $.ComponentSpec("msgVersion", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("msgGlobalData", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("msgSecurityParameters", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("msgData", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of SNMPv3Message
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SNMPv3Message: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of SNMPv3Message
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_SNMPv3Message: $.ComponentSpec[] = [

];

let _cached_decoder_for_SNMPv3Message: $.ASN1Decoder<SNMPv3Message> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SNMPv3Message
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SNMPv3Message} The decoded data structure.
 */
export
function _decode_SNMPv3Message (el: _Element) {
    if (!_cached_decoder_for_SNMPv3Message) { _cached_decoder_for_SNMPv3Message = function (el: _Element): SNMPv3Message {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("SNMPv3Message contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "msgVersion";
    sequence[1].name = "msgGlobalData";
    sequence[2].name = "msgSecurityParameters";
    sequence[3].name = "msgData";
    let msgVersion!: INTEGER;
    let msgGlobalData!: HeaderData;
    let msgSecurityParameters!: OCTET_STRING;
    let msgData!: ScopedPduData;
    msgVersion = $._decodeInteger(sequence[0]);
    msgGlobalData = _decode_HeaderData(sequence[1]);
    msgSecurityParameters = $._decodeOctetString(sequence[2]);
    msgData = _decode_ScopedPduData(sequence[3]);
    return new SNMPv3Message(
        msgVersion,
        msgGlobalData,
        msgSecurityParameters,
        msgData,

    );
}; }
    return _cached_decoder_for_SNMPv3Message(el);
}

let _cached_encoder_for_SNMPv3Message: $.ASN1Encoder<SNMPv3Message> | null = null;

/**
 * @summary Encodes a(n) SNMPv3Message into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SNMPv3Message, encoded as an ASN.1 Element.
 */
export
function _encode_SNMPv3Message (value: SNMPv3Message, elGetter: $.ASN1Encoder<SNMPv3Message>) {
    if (!_cached_encoder_for_SNMPv3Message) { _cached_encoder_for_SNMPv3Message = function (value: SNMPv3Message): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.msgVersion, $.BER),
            /* REQUIRED   */ _encode_HeaderData(value.msgGlobalData, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.msgSecurityParameters, $.BER),
            /* REQUIRED   */ _encode_ScopedPduData(value.msgData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SNMPv3Message(value, elGetter);
}


/* eslint-enable */

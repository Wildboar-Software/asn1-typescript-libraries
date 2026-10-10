/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Octet1, _decode_Octet1, _encode_Octet1 } from "../RSPDefinitions/Octet1.ta.mjs";
import { OctetTo16, _decode_OctetTo16, _encode_OctetTo16 } from "../RSPDefinitions/OctetTo16.ta.mjs";


/**
 * @summary ControlRefTemplate
 * @description
 * 
 * Subset of the GlobalPlatform control reference template describing the keys
 * to agree. For AES-128, `keyType` is `'88'` and `keyLen` is `'10'`. For SM4,
 * `keyType` is `'89'` and `keyLen` is `'10'`. Anything else is
 * `unsupportedCrtValues`. Host ID is part of the key-derivation SharedInfo,
 * together with the EID. SCP identifier `'90'` and key-usage qualifier `'95'`
 * are not used; key usage is implied by `remoteOpId`. SGP.22 v3.1 §5.5.1 and
 * §2.6.4.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlRefTemplate ::= SEQUENCE {
 *     keyType[0] Octet1, -- Key type according to GlobalPlatform Card Specification [8] Table 11-16, AES= '88' , Tag '80'
 *     keyLen[1] Octet1, --Key length in number of bytes. For current specification key length SHALL by 0x10 bytes, Tag '81'
 *     hostId[4] OctetTo16 -- Host ID value , Tag '84'
 * }
 * ```
 * 
 * @class
 */
export
class ControlRefTemplate {
    constructor (
        /**
         * @summary `keyType`.
         * @description
         * 
         * GlobalPlatform key type. `'88'` for AES, `'89'` for SM4. Tag `'80'`.
         * SGP.22 v3.1 §5.5.1.
         * 
         * @public
         * @readonly
         */
        readonly keyType: Octet1,
        /**
         * @summary `keyLen`.
         * @description
         * 
         * Key length in octets. `'10'` (16 octets) for both AES-128 and SM4 in
         * this specification. Tag `'81'`. SGP.22 v3.1 §5.5.1.
         * 
         * @public
         * @readonly
         */
        readonly keyLen: Octet1,
        /**
         * @summary `hostId`.
         * @description
         * 
         * Host identifier, tag `'84'`. Its length and value are the HostID-LV
         * input to X9.63 key derivation, next to the EID. SGP.22 v3.1 §2.6.4.2.
         * 
         * @public
         * @readonly
         */
        readonly hostId: OctetTo16
    ) {}

    /**
     * @summary Restructures an object into a ControlRefTemplate
     * @description
     * 
     * This takes an `object` and converts it to a `ControlRefTemplate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ControlRefTemplate`.
     * @returns {ControlRefTemplate}
     */
    public static _from_object (_o: { [_K in keyof (ControlRefTemplate)]: (ControlRefTemplate)[_K] }): ControlRefTemplate {
        return new ControlRefTemplate(_o.keyType, _o.keyLen, _o.hostId);
    }


}

/**
 * @summary The Leading Root Component Types of ControlRefTemplate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ControlRefTemplate: $.ComponentSpec[] = [
    new $.ComponentSpec("keyType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("keyLen", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("hostId", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ControlRefTemplate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ControlRefTemplate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ControlRefTemplate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ControlRefTemplate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ControlRefTemplate: $.ASN1Decoder<ControlRefTemplate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlRefTemplate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ControlRefTemplate (el: _Element): ControlRefTemplate {
    if (!_cached_decoder_for_ControlRefTemplate) { _cached_decoder_for_ControlRefTemplate = function (el: _Element): ControlRefTemplate {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ControlRefTemplate contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "keyType";
    sequence[1].name = "keyLen";
    sequence[2].name = "hostId";
    let keyType!: Octet1;
    let keyLen!: Octet1;
    let hostId!: OctetTo16;
    keyType = $._decode_implicit<Octet1>(() => _decode_Octet1)(sequence[0]);
    keyLen = $._decode_implicit<Octet1>(() => _decode_Octet1)(sequence[1]);
    hostId = $._decode_implicit<OctetTo16>(() => _decode_OctetTo16)(sequence[2]);
    return new ControlRefTemplate(
        keyType,
        keyLen,
        hostId,

    );
}; }
    return _cached_decoder_for_ControlRefTemplate(el);
}

let _cached_encoder_for_ControlRefTemplate: $.ASN1Encoder<ControlRefTemplate> | null = null;

/**
 * @summary Encodes a(n) ControlRefTemplate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlRefTemplate, encoded as an ASN.1 Element.
 */
export
function _encode_ControlRefTemplate (value: ControlRefTemplate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ControlRefTemplate) { _cached_encoder_for_ControlRefTemplate = function (value: ControlRefTemplate): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Octet1, $.BER)(value.keyType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Octet1, $.BER)(value.keyLen, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_OctetTo16, $.BER)(value.hostId, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ControlRefTemplate(value, elGetter);
}


/* eslint-enable */

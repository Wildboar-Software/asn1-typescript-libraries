/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
// export { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";
import { AntennaId, _decode_AntennaId, _encode_AntennaId } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/AntennaId.ta.mjs";
// export { AntennaId, _decode_AntennaId, _encode_AntennaId } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/AntennaId.ta.mjs";
import { RcfTransferDataInvocation_privateAnnotation, _decode_RcfTransferDataInvocation_privateAnnotation, _encode_RcfTransferDataInvocation_privateAnnotation } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-OUTGOING-PDUS/RcfTransferDataInvocation-privateAnnotation.ta.mjs";
// export { RcfTransferDataInvocation_privateAnnotation, _decode_RcfTransferDataInvocation_privateAnnotation, _encode_RcfTransferDataInvocation_privateAnnotation } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-OUTGOING-PDUS/RcfTransferDataInvocation-privateAnnotation.ta.mjs";
import { SpaceLinkDataUnit, _decode_SpaceLinkDataUnit, _encode_SpaceLinkDataUnit } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/SpaceLinkDataUnit.ta.mjs";
// export { SpaceLinkDataUnit, _decode_SpaceLinkDataUnit, _encode_SpaceLinkDataUnit } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/SpaceLinkDataUnit.ta.mjs";


/**
 * @summary RcfTransferDataInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfTransferDataInvocation ::= SEQUENCE
 * {   invokerCredentials              Credentials
 * ,   earthReceiveTime                Time
 * ,   antennaId                       AntennaId
 * ,   dataLinkContinuity              INTEGER (-1 .. 16777215)
 * ,   privateAnnotation               CHOICE
 *     {   null                            [0] NULL
 *     ,   notNull                         [1] OCTET STRING (SIZE (1 .. 128))
 *     }
 * ,   data                           SpaceLinkDataUnit
 * }
 * ```
 * 
 * @class
 */
export
class RcfTransferDataInvocation {
    /**
     * @summary `invokerCredentials`.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `earthReceiveTime`.
     * @public
     * @readonly
     */
    readonly earthReceiveTime: Time;
    /**
     * @summary `antennaId`.
     * @public
     * @readonly
     */
    readonly antennaId: AntennaId;
    /**
     * @summary `dataLinkContinuity`.
     * @public
     * @readonly
     */
    readonly dataLinkContinuity: INTEGER;
    /**
     * @summary `privateAnnotation`.
     * @public
     * @readonly
     */
    readonly privateAnnotation: RcfTransferDataInvocation_privateAnnotation;
    /**
     * @summary `data`.
     * @public
     * @readonly
     */
    readonly data: SpaceLinkDataUnit;

    constructor (
        invokerCredentials: Credentials,
        earthReceiveTime: Time,
        antennaId: AntennaId,
        dataLinkContinuity: INTEGER,
        privateAnnotation: RcfTransferDataInvocation_privateAnnotation,
        data: SpaceLinkDataUnit
    ) {
        this.invokerCredentials = invokerCredentials;
        this.earthReceiveTime = earthReceiveTime;
        this.antennaId = antennaId;
        this.dataLinkContinuity = dataLinkContinuity;
        this.privateAnnotation = privateAnnotation;
        this.data = data;
    }

    /**
     * @summary Restructures an object into a RcfTransferDataInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RcfTransferDataInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfTransferDataInvocation`.
     * @returns {RcfTransferDataInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RcfTransferDataInvocation)]: (RcfTransferDataInvocation)[_K] }): RcfTransferDataInvocation {
        return new RcfTransferDataInvocation(_o.invokerCredentials, _o.earthReceiveTime, _o.antennaId, _o.dataLinkContinuity, _o.privateAnnotation, _o.data);
    }


}

/**
 * @summary The Leading Root Component Types of RcfTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfTransferDataInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("earthReceiveTime", false, $.hasAnyTag),
    new $.ComponentSpec("antennaId", false, $.hasAnyTag),
    new $.ComponentSpec("dataLinkContinuity", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("privateAnnotation", false, $.hasAnyTag),
    new $.ComponentSpec("data", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of RcfTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfTransferDataInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfTransferDataInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfTransferDataInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfTransferDataInvocation: $.ASN1Decoder<RcfTransferDataInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfTransferDataInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfTransferDataInvocation (el: _Element): RcfTransferDataInvocation {
    if (!_cached_decoder_for_RcfTransferDataInvocation) { _cached_decoder_for_RcfTransferDataInvocation = function (el: _Element): RcfTransferDataInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("RcfTransferDataInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "earthReceiveTime";
    sequence[2].name = "antennaId";
    sequence[3].name = "dataLinkContinuity";
    sequence[4].name = "privateAnnotation";
    sequence[5].name = "data";
    let invokerCredentials!: Credentials;
    let earthReceiveTime!: Time;
    let antennaId!: AntennaId;
    let dataLinkContinuity!: INTEGER;
    let privateAnnotation!: RcfTransferDataInvocation_privateAnnotation;
    let data!: SpaceLinkDataUnit;
    invokerCredentials = _decode_Credentials(sequence[0]);
    earthReceiveTime = _decode_Time(sequence[1]);
    antennaId = _decode_AntennaId(sequence[2]);
    dataLinkContinuity = $._decodeInteger(sequence[3]);
    privateAnnotation = _decode_RcfTransferDataInvocation_privateAnnotation(sequence[4]);
    data = _decode_SpaceLinkDataUnit(sequence[5]);
    return new RcfTransferDataInvocation(
        invokerCredentials,
        earthReceiveTime,
        antennaId,
        dataLinkContinuity,
        privateAnnotation,
        data,

    );
}; }
    return _cached_decoder_for_RcfTransferDataInvocation(el);
}

let _cached_encoder_for_RcfTransferDataInvocation: $.ASN1Encoder<RcfTransferDataInvocation> | null = null;

/**
 * @summary Encodes a(n) RcfTransferDataInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfTransferDataInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RcfTransferDataInvocation (value: RcfTransferDataInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfTransferDataInvocation) { _cached_encoder_for_RcfTransferDataInvocation = function (value: RcfTransferDataInvocation, elGetter: $.ASN1Encoder<RcfTransferDataInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_Time(value.earthReceiveTime, $.BER),
        /* REQUIRED   */ _encode_AntennaId(value.antennaId, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.dataLinkContinuity, $.BER),
        /* REQUIRED   */ _encode_RcfTransferDataInvocation_privateAnnotation(value.privateAnnotation, $.BER),
        /* REQUIRED   */ _encode_SpaceLinkDataUnit(value.data, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfTransferDataInvocation(value, elGetter);
}


/* eslint-enable */

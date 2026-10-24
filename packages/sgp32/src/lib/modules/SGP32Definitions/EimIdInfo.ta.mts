/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
    type UTF8String
} from "@wildboar/asn1";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_EimIdType, _encode_EimIdType, type EimIdType } from "../SGP32Definitions/EimIdType.ta.mjs";


/**
 * @summary EimIdInfo
 * @description
 * 
 * One Associated eIM identifier returned by listEim (SGP.32 v1.2, sections
 * 2.11.2.1 and 3.5.1.4). The eUICC returns the identifier of every Associated
 * eIM after the signed package has been verified.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimIdInfo ::= SEQUENCE {
 *     eimId [0] UTF8String (SIZE(1..128)),
 *     eimIdType [2] EimIdType OPTIONAL -- present in case of eimIdTypeOid and eimIdTypeFqdn
 * }
 * ```
 * 
 * @class
 */
export
class EimIdInfo {
    /**
     * @summary `eimId`.
     * @description
     * Identifier of an Associated eIM, 1 to 128 bytes, unique within the eUICC
     * (SGP.32 v1.2, sections 2.11.2.1 and 4.3).
     * @public
     * @readonly
     */
    public readonly eimId: UTF8String;
    /**
     * @summary `eimIdType`.
     * @description
     * Present when the stored type is eimIdTypeOid or eimIdTypeFqdn (SGP.32 v1.2,
     * section 2.11.2.1). When the stored type is eimIdTypeProprietary this
     * component is absent.
     * @public
     * @readonly
     */
    public readonly eimIdType?: OPTIONAL<EimIdType>;

    constructor (
        eimId: UTF8String,
        eimIdType?: OPTIONAL<EimIdType>
    ) {
        this.eimId = eimId;
        this.eimIdType = eimIdType;
        if (this.eimId.length < 1 || this.eimId.length > 128) {
            throw new ASN1SizeError("EimIdInfo.eimId violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a EimIdInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EimIdInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EimIdInfo`.
     * @returns {EimIdInfo}
     */
    public static _from_object (_o: { [_K in keyof (EimIdInfo)]: (EimIdInfo)[_K] }): EimIdInfo {
        return new EimIdInfo(_o.eimId, _o.eimIdType);
    }


}

/**
 * @summary The Leading Root Component Types of EimIdInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EimIdInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("eimId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eimIdType", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EimIdInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EimIdInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EimIdInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EimIdInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EimIdInfo: $.ASN1Decoder<EimIdInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimIdInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimIdInfo (el: _Element): EimIdInfo {
    if (!_cached_decoder_for_EimIdInfo) { _cached_decoder_for_EimIdInfo = function (el: _Element): EimIdInfo {
    let eimId!: UTF8String;
    let eimIdType: OPTIONAL<EimIdType>;
    const callbacks: $.DecodingMap = {
        "eimId": (_el: _Element): void => { eimId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eimIdType": (_el: _Element): void => { eimIdType = $._decode_implicit<EimIdType>(() => _decode_EimIdType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EimIdInfo,
        _extension_additions_list_spec_for_EimIdInfo,
        _root_component_type_list_2_spec_for_EimIdInfo,
        undefined,
    );
    return new EimIdInfo(
        eimId,
        eimIdType
    );
}; }
    return _cached_decoder_for_EimIdInfo(el);
}

let _cached_encoder_for_EimIdInfo: $.ASN1Encoder<EimIdInfo> | null = null;

/**
 * @summary Encodes a(n) EimIdInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimIdInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EimIdInfo (value: EimIdInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimIdInfo) { _cached_encoder_for_EimIdInfo = function (value: EimIdInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.eimId, $.BER),
            /* IF_ABSENT  */ ((value.eimIdType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EimIdType, $.BER)(value.eimIdType, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EimIdInfo(value, elGetter);
}


/* eslint-enable */

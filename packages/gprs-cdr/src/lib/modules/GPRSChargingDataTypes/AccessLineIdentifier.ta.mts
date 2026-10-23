/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessLineIdentifier
 * @description
 *
 * This field contains the Access line id (physical and logical circuit ID)
 * serving the 3GPP UE or fixed user (i.e. Fixed device or RG). This field
 * contains the Access line id (physical and logical circuit ID): serving the
 * 3GPP UE or fixed device, behind the RG when in bridge mode or in routed
 * mode without NAT, or of the RG when in routed mode with NAT; of the access
 * point to which the UE is attached, in trusted or untrusted WLAN.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.0A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessLineIdentifier ::= SEQUENCE {
 *    physicalAccessID   [0] IMPLICIT UTF8String OPTIONAL,
 *    logicalAccessID    [1] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class AccessLineIdentifier {
    /**
     * @summary `physicalAccessID`.
     * @public
     * @readonly
     */
    readonly physicalAccessID: OPTIONAL<UTF8String>;
    /**
     * @summary `logicalAccessID`.
     * @public
     * @readonly
     */
    readonly logicalAccessID: OPTIONAL<OCTET_STRING>;

    constructor (
        physicalAccessID?: OPTIONAL<UTF8String>,
        logicalAccessID?: OPTIONAL<OCTET_STRING>
    ) {
        this.physicalAccessID = physicalAccessID;
        this.logicalAccessID = logicalAccessID;
    }

    /**
     * @summary Restructures an object into a AccessLineIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `AccessLineIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessLineIdentifier`.
     * @returns {AccessLineIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (AccessLineIdentifier)]: (AccessLineIdentifier)[_K] }): AccessLineIdentifier {
        return new AccessLineIdentifier(_o.physicalAccessID, _o.logicalAccessID);
    }


}

/**
 * @summary The Leading Root Component Types of AccessLineIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessLineIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("physicalAccessID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("logicalAccessID", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AccessLineIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessLineIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessLineIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessLineIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessLineIdentifier: $.ASN1Decoder<AccessLineIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessLineIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessLineIdentifier (el: _Element): AccessLineIdentifier {
    if (!_cached_decoder_for_AccessLineIdentifier) { _cached_decoder_for_AccessLineIdentifier = function (el: _Element): AccessLineIdentifier {
    let physicalAccessID: OPTIONAL<UTF8String>;
    let logicalAccessID: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "physicalAccessID": (_el: _Element): void => { physicalAccessID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "logicalAccessID": (_el: _Element): void => { logicalAccessID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AccessLineIdentifier,
        _extension_additions_list_spec_for_AccessLineIdentifier,
        _root_component_type_list_2_spec_for_AccessLineIdentifier,
        undefined,
    );
    return new AccessLineIdentifier(
        physicalAccessID,
        logicalAccessID
    );
}; }
    return _cached_decoder_for_AccessLineIdentifier(el);
}

let _cached_encoder_for_AccessLineIdentifier: $.ASN1Encoder<AccessLineIdentifier> | null = null;

/**
 * @summary Encodes a(n) AccessLineIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessLineIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_AccessLineIdentifier (value: AccessLineIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessLineIdentifier) { _cached_encoder_for_AccessLineIdentifier = function (value: AccessLineIdentifier, _elGetter: $.ASN1Encoder<AccessLineIdentifier>): _Element {
    const _components: _Element[] = [];
    if (value.physicalAccessID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.physicalAccessID, $.BER));
    }
    if (value.logicalAccessID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.logicalAccessID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AccessLineIdentifier(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PACEInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PACEInfo ::= SEQUENCE {
 *     protocol    OBJECT IDENTIFIER(
 *         id-PACE-DH-GM-3DES-CBC-CBC
 *         | id-PACE-DH-GM-AES-CBC-CMAC-128
 *         | id-PACE-DH-GM-AES-CBC-CMAC-192
 *         | id-PACE-DH-GM-AES-CBC-CMAC-256
 *         | id-PACE-ECDH-GM-3DES-CBC-CBC
 *         | id-PACE-ECDH-GM-AES-CBC-CMAC-128
 *         | id-PACE-ECDH-GM-AES-CBC-CMAC-192
 *         | id-PACE-ECDH-GM-AES-CBC-CMAC-256
 *         | id-PACE-DH-IM-3DES-CBC-CBC
 *         | id-PACE-DH-IM-AES-CBC-CMAC-128
 *         | id-PACE-DH-IM-AES-CBC-CMAC-192
 *         | id-PACE-DH-IM-AES-CBC-CMAC-256
 *         | id-PACE-ECDH-IM-3DES-CBC-CBC
 *         | id-PACE-ECDH-IM-AES-CBC-CMAC-128
 *         | id-PACE-ECDH-IM-AES-CBC-CMAC-192
 *         | id-PACE-ECDH-IM-AES-CBC-CMAC-256
 *         | id-PACE-ECDH-CAM-AES-CBC-CMAC-128
 *         | id-PACE-ECDH-CAM-AES-CBC-CMAC-192
 *         | id-PACE-ECDH-CAM-AES-CBC-CMAC-256
 *     ),
 *     version     INTEGER, -- MUST be 2
 *     parameterId INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PACEInfo {
    constructor (
        /**
         * @summary `protocol`.
         * @public
         * @readonly
         */
        readonly protocol: OBJECT_IDENTIFIER,
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: INTEGER,
        /**
         * @summary `parameterId`.
         * @public
         * @readonly
         */
        readonly parameterId: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a PACEInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PACEInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PACEInfo`.
     * @returns {PACEInfo}
     */
    public static _from_object (_o: { [_K in keyof (PACEInfo)]: (PACEInfo)[_K] }): PACEInfo {
        return new PACEInfo(_o.protocol, _o.version, _o.parameterId);
    }


}

/**
 * @summary The Leading Root Component Types of PACEInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PACEInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("protocol", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterId", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of PACEInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PACEInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PACEInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PACEInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PACEInfo: $.ASN1Decoder<PACEInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PACEInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PACEInfo (el: _Element): PACEInfo {
    if (!_cached_decoder_for_PACEInfo) { _cached_decoder_for_PACEInfo = function (el: _Element): PACEInfo {
    let protocol!: OBJECT_IDENTIFIER;
    let version!: INTEGER;
    let parameterId: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "protocol": (_el: _Element): void => { protocol = $._decodeObjectIdentifier(_el); },
        "version": (_el: _Element): void => { version = $._decodeInteger(_el); },
        "parameterId": (_el: _Element): void => { parameterId = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PACEInfo,
        _extension_additions_list_spec_for_PACEInfo,
        _root_component_type_list_2_spec_for_PACEInfo,
        undefined,
    );
    return new PACEInfo(
        protocol,
        version,
        parameterId
    );
}; }
    return _cached_decoder_for_PACEInfo(el);
}

let _cached_encoder_for_PACEInfo: $.ASN1Encoder<PACEInfo> | null = null;

/**
 * @summary Encodes a(n) PACEInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PACEInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PACEInfo (value: PACEInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PACEInfo) { _cached_encoder_for_PACEInfo = function (value: PACEInfo, elGetter: $.ASN1Encoder<PACEInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.protocol, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.version, $.BER),
            /* IF_ABSENT  */ ((value.parameterId === undefined) ? undefined : $._encodeInteger(value.parameterId, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PACEInfo(value, elGetter);
}


/* eslint-enable */

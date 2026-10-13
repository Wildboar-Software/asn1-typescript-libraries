/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Payload_description
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Payload-description ::= SEQUENCE
 * {
 *     copyOfSDPdescription        [1] OCTET STRING OPTIONAL,
 *         -- Copy of the SDP. Format as per RFC 4566 [94].
 *         -- used for VoIP
 *     ...,
 *     mediaFormat                    [2]    INTEGER (0..127) OPTIONAL,
 *         -- as defined in RFC 3551 [93]
 *         -- used with IP-based delivery for CS
 *     mediaAttributes                [3]    OCTET STRING OPTIONAL
 *         -- as defined in RFC 4566 [94]
 *         -- used with IP-based delivery for CS
 * }
 * ```
 * 
 * @class
 */
export
class Payload_description {
    /**
     * @summary `copyOfSDPdescription`.
     * @public
     * @readonly
     */
    readonly copyOfSDPdescription: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mediaFormat`.
     * @public
     * @readonly
     */
    readonly mediaFormat: OPTIONAL<INTEGER>;
    /**
     * @summary `mediaAttributes`.
     * @public
     * @readonly
     */
    readonly mediaAttributes: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        copyOfSDPdescription: OPTIONAL<OCTET_STRING>,
        mediaFormat: OPTIONAL<INTEGER>,
        mediaAttributes: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.copyOfSDPdescription = copyOfSDPdescription;
        this.mediaFormat = mediaFormat;
        this.mediaAttributes = mediaAttributes;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Payload_description
     * @description
     * 
     * This takes an `object` and converts it to a `Payload_description`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Payload_description`.
     * @returns {Payload_description}
     */
    public static _from_object (_o: { [_K in keyof (Payload_description)]: (Payload_description)[_K] }): Payload_description {
        return new Payload_description(_o.copyOfSDPdescription, _o.mediaFormat, _o.mediaAttributes, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Payload_description
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Payload_description: $.ComponentSpec[] = [
    new $.ComponentSpec("copyOfSDPdescription", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Payload_description
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Payload_description: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Payload_description
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Payload_description: $.ComponentSpec[] = [
    new $.ComponentSpec("mediaFormat", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mediaAttributes", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_Payload_description: $.ASN1Decoder<Payload_description> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Payload_description
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Payload_description (el: _Element): Payload_description {
    if (!_cached_decoder_for_Payload_description) { _cached_decoder_for_Payload_description = function (el: _Element): Payload_description {
    let copyOfSDPdescription: OPTIONAL<OCTET_STRING>;
    let mediaFormat: OPTIONAL<INTEGER>;
    let mediaAttributes: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "copyOfSDPdescription": (_el: _Element): void => { copyOfSDPdescription = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mediaFormat": (_el: _Element): void => {
            mediaFormat = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof mediaFormat === "bigint" ? mediaFormat : BigInt(mediaFormat);
            if (_n < 0n || _n > 127n) {
                throw new ASN1OverflowError("Payload_description.mediaFormat violates INTEGER range");
            }
        },
        "mediaAttributes": (_el: _Element): void => { mediaAttributes = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Payload_description,
        _extension_additions_list_spec_for_Payload_description,
        _root_component_type_list_2_spec_for_Payload_description,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Payload_description(
        copyOfSDPdescription,
        mediaFormat,
        mediaAttributes,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Payload_description(el);
}

let _cached_encoder_for_Payload_description: $.ASN1Encoder<Payload_description> | null = null;

/**
 * @summary Encodes a(n) Payload_description into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Payload_description, encoded as an ASN.1 Element.
 */
export
function _encode_Payload_description (value: Payload_description, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Payload_description) { _cached_encoder_for_Payload_description = function (value: Payload_description, elGetter: $.ASN1Encoder<Payload_description>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.copyOfSDPdescription !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.copyOfSDPdescription, $.BER);
    }
    if (value.mediaFormat !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.mediaFormat, $.BER);
    }
    if (value.mediaAttributes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.mediaAttributes, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Payload_description(value, elGetter);
}


/* eslint-enable */

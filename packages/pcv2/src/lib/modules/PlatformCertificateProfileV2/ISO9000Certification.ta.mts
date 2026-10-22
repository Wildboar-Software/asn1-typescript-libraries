/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    IA5String,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { urimax } from "../PlatformCertificateProfileV2/urimax.va.mjs";



/**
 * @summary ISO9000Certification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISO9000Certification ::= SEQUENCE {
 *     iso9000Certified    BOOLEAN DEFAULT FALSE,
 *     iso9000Uri          IA5String (SIZE (1..urimax)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ISO9000Certification {
    /**
     * @summary `iso9000Certified`.
     * @public
     * @readonly
     */
    readonly iso9000Certified: OPTIONAL<BOOLEAN>;
    /**
     * @summary `iso9000Uri`.
     * @public
     * @readonly
     */
    readonly iso9000Uri: OPTIONAL<IA5String>;

    constructor (
        iso9000Certified: OPTIONAL<BOOLEAN>,
        iso9000Uri: OPTIONAL<IA5String>
    ) {
        this.iso9000Certified = iso9000Certified;
        this.iso9000Uri = iso9000Uri;
        if (iso9000Uri !== undefined && (iso9000Uri.length < 1 || iso9000Uri.length > urimax)) {
            throw new ASN1SizeError("ISO9000Certification.iso9000Uri violates SIZE (1..urimax)");
        }
    }

    /**
     * @summary Restructures an object into a ISO9000Certification
     * @description
     * 
     * This takes an `object` and converts it to a `ISO9000Certification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ISO9000Certification`.
     * @returns {ISO9000Certification}
     */
    public static _from_object (_o: { [_K in keyof (ISO9000Certification)]: (ISO9000Certification)[_K] }): ISO9000Certification {
        return new ISO9000Certification(_o.iso9000Certified, _o.iso9000Uri);
    }

    /**
     * @summary Getter that returns the default value for `iso9000Certified`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_iso9000Certified () { return false; }
}

/**
 * @summary The Leading Root Component Types of ISO9000Certification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ISO9000Certification: $.ComponentSpec[] = [
    new $.ComponentSpec("iso9000Certified", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("iso9000Uri", true, $.hasTag(_TagClass.universal, 22))
];

/**
 * @summary The Trailing Root Component Types of ISO9000Certification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ISO9000Certification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ISO9000Certification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ISO9000Certification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ISO9000Certification: $.ASN1Decoder<ISO9000Certification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISO9000Certification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISO9000Certification (el: _Element): ISO9000Certification {
    if (!_cached_decoder_for_ISO9000Certification) { _cached_decoder_for_ISO9000Certification = function (el: _Element): ISO9000Certification {
    let iso9000Certified: OPTIONAL<BOOLEAN> = ISO9000Certification._default_value_for_iso9000Certified;
    let iso9000Uri: OPTIONAL<IA5String>;
    const callbacks: $.DecodingMap = {
        "iso9000Certified": (_el: _Element): void => { iso9000Certified = $._decodeBoolean(_el); },
        "iso9000Uri": (_el: _Element): void => { iso9000Uri = $._decodeIA5String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ISO9000Certification,
        _extension_additions_list_spec_for_ISO9000Certification,
        _root_component_type_list_2_spec_for_ISO9000Certification,
        undefined,
    );
    return new ISO9000Certification(
        iso9000Certified,
        iso9000Uri
    );
}; }
    return _cached_decoder_for_ISO9000Certification(el);
}

let _cached_encoder_for_ISO9000Certification: $.ASN1Encoder<ISO9000Certification> | null = null;

/**
 * @summary Encodes a(n) ISO9000Certification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISO9000Certification, encoded as an ASN.1 Element.
 */
export
function _encode_ISO9000Certification (value: ISO9000Certification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISO9000Certification) { _cached_encoder_for_ISO9000Certification = function (value: ISO9000Certification): _Element {
    const _components: _Element[] = [];
    if (value.iso9000Certified !== undefined && !$.deepEq(value.iso9000Certified, ISO9000Certification._default_value_for_iso9000Certified)) {
        _components.push(/* IF_DEFAULT */ $._encodeBoolean(value.iso9000Certified, $.BER));
    }
    if (value.iso9000Uri !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeIA5String(value.iso9000Uri, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ISO9000Certification(value, elGetter);
}


/* eslint-enable */

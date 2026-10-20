/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
// export { ExtensionSet } from "../AuthenticationFramework/ExtensionSet.osa.mjs";


/**
 * @summary Extension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Extension ::= SEQUENCE {
 *   extnId     EXTENSION.&id({ExtensionSet}),
 *   critical   BOOLEAN DEFAULT FALSE,
 *   extnValue  OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class Extension {
    /**
     * @summary `extnId`.
     * @public
     * @readonly
     */
    readonly extnId: OBJECT_IDENTIFIER;
    /**
     * @summary `critical`.
     * @public
     * @readonly
     */
    readonly critical: OPTIONAL<BOOLEAN>;
    /**
     * @summary `extnValue`.
     * @public
     * @readonly
     */
    readonly extnValue: OCTET_STRING;

    constructor (
        extnId: OBJECT_IDENTIFIER,
        critical: OPTIONAL<BOOLEAN>,
        extnValue: OCTET_STRING
    ) {
        this.extnId = extnId;
        this.critical = critical;
        this.extnValue = extnValue;
    }

    /**
     * @summary Restructures an object into a Extension
     * @description
     * 
     * This takes an `object` and converts it to a `Extension`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Extension`.
     * @returns {Extension}
     */
    public static _from_object (_o: { [_K in keyof (Extension)]: (Extension)[_K] }): Extension {
        return new Extension(_o.extnId, _o.critical, _o.extnValue);
    }

    /**
     * @summary Getter that returns the default value for `critical`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_critical () { return false; }
}

/**
 * @summary The Leading Root Component Types of Extension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Extension: $.ComponentSpec[] = [
    new $.ComponentSpec("extnId", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("critical", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extnValue", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of Extension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Extension: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Extension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Extension: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Extension: $.ASN1Decoder<Extension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Extension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Extension (el: _Element): Extension {
    if (!_cached_decoder_for_Extension) { _cached_decoder_for_Extension = function (el: _Element): Extension {
    let extnId!: OBJECT_IDENTIFIER;
    let critical: OPTIONAL<BOOLEAN> = Extension._default_value_for_critical;
    let extnValue!: OCTET_STRING;
    const callbacks: $.DecodingMap = {
        "extnId": (_el: _Element): void => { extnId = $._decodeObjectIdentifier(_el); },
        "critical": (_el: _Element): void => { critical = $._decodeBoolean(_el); },
        "extnValue": (_el: _Element): void => { extnValue = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Extension,
        _extension_additions_list_spec_for_Extension,
        _root_component_type_list_2_spec_for_Extension,
        undefined,
    );
    return new Extension(
        extnId,
        critical,
        extnValue
    );
}; }
    return _cached_decoder_for_Extension(el);
}

let _cached_encoder_for_Extension: $.ASN1Encoder<Extension> | null = null;

/**
 * @summary Encodes a(n) Extension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extension, encoded as an ASN.1 Element.
 */
export
function _encode_Extension (value: Extension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Extension) { _cached_encoder_for_Extension = function (value: Extension, elGetter: $.ASN1Encoder<Extension>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeObjectIdentifier(value.extnId, $.BER));
    if (value.critical !== undefined && !$.deepEq(value.critical, Extension._default_value_for_critical)) {
        _components.push(/* IF_DEFAULT */ $._encodeBoolean(value.critical, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encodeOctetString(value.extnValue, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Extension(value, elGetter);
}


/* eslint-enable */

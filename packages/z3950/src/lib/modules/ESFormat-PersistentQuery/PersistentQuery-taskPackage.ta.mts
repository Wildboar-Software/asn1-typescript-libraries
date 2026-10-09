/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartToKeep, _decode_ClientPartToKeep, _encode_ClientPartToKeep } from "../ESFormat-PersistentQuery/ClientPartToKeep.ta.mjs";
import { ServerPart, _decode_ServerPart, _encode_ServerPart } from "../ESFormat-PersistentQuery/ServerPart.ta.mjs";


/**
 * @summary PersistentQuery_taskPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PersistentQuery-taskPackage ::= SEQUENCE {
 *     clientPart [1] ClientPartToKeep OPTIONAL,
 *     serverPart [2] ServerPart
 * }
 * ```
 * 
 * @class
 */
export
class PersistentQuery_taskPackage {
    /**
     * @summary `clientPart`.
     * @public
     * @readonly
     */
    readonly clientPart: OPTIONAL<ClientPartToKeep>;
    /**
     * @summary `serverPart`.
     * @public
     * @readonly
     */
    readonly serverPart: ServerPart;

    constructor (
        clientPart: OPTIONAL<ClientPartToKeep>,
        serverPart: ServerPart
    ) {
        this.clientPart = clientPart;
        this.serverPart = serverPart;
    }

    /**
     * @summary Restructures an object into a PersistentQuery_taskPackage
     * @description
     * 
     * This takes an `object` and converts it to a `PersistentQuery_taskPackage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PersistentQuery_taskPackage`.
     * @returns {PersistentQuery_taskPackage}
     */
    public static _from_object (_o: { [_K in keyof (PersistentQuery_taskPackage)]: (PersistentQuery_taskPackage)[_K] }): PersistentQuery_taskPackage {
        return new PersistentQuery_taskPackage(_o.clientPart, _o.serverPart);
    }


}

/**
 * @summary The Leading Root Component Types of PersistentQuery_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PersistentQuery_taskPackage: $.ComponentSpec[] = [
    new $.ComponentSpec("clientPart", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serverPart", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PersistentQuery_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PersistentQuery_taskPackage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PersistentQuery_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PersistentQuery_taskPackage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PersistentQuery_taskPackage: $.ASN1Decoder<PersistentQuery_taskPackage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PersistentQuery_taskPackage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PersistentQuery_taskPackage (el: _Element): PersistentQuery_taskPackage {
    if (!_cached_decoder_for_PersistentQuery_taskPackage) { _cached_decoder_for_PersistentQuery_taskPackage = function (el: _Element): PersistentQuery_taskPackage {
    let clientPart: OPTIONAL<ClientPartToKeep>;
    let serverPart!: ServerPart;
    const callbacks: $.DecodingMap = {
        "clientPart": (_el: _Element): void => { clientPart = $._decode_explicit<ClientPartToKeep>(() => _decode_ClientPartToKeep)(_el); },
        "serverPart": (_el: _Element): void => { serverPart = $._decode_explicit<ServerPart>(() => _decode_ServerPart)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PersistentQuery_taskPackage,
        _extension_additions_list_spec_for_PersistentQuery_taskPackage,
        _root_component_type_list_2_spec_for_PersistentQuery_taskPackage,
        undefined,
    );
    return new PersistentQuery_taskPackage(
        clientPart,
        serverPart
    );
}; }
    return _cached_decoder_for_PersistentQuery_taskPackage(el);
}

let _cached_encoder_for_PersistentQuery_taskPackage: $.ASN1Encoder<PersistentQuery_taskPackage> | null = null;

/**
 * @summary Encodes a(n) PersistentQuery_taskPackage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersistentQuery_taskPackage, encoded as an ASN.1 Element.
 */
export
function _encode_PersistentQuery_taskPackage (value: PersistentQuery_taskPackage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PersistentQuery_taskPackage) { _cached_encoder_for_PersistentQuery_taskPackage = function (value: PersistentQuery_taskPackage, elGetter: $.ASN1Encoder<PersistentQuery_taskPackage>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.clientPart !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_ClientPartToKeep, $.BER)(value.clientPart, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ServerPart, $.BER)(value.serverPart, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PersistentQuery_taskPackage(value, elGetter);
}


/* eslint-enable */

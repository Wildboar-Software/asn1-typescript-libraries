/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartToKeep, _decode_ClientPartToKeep, _encode_ClientPartToKeep } from "../ESFormat-Update/ClientPartToKeep.ta.mjs";
import { ServerPart, _decode_ServerPart, _encode_ServerPart } from "../ESFormat-Update/ServerPart.ta.mjs";


/**
 * @summary Update_taskPackage
 * @description
 * 
 * Database Update task package: the retained action and database, and the
 * server's status, task-level diagnostics, and per-record results.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5, EXT.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Update-taskPackage ::= SEQUENCE {
 *     clientPart [1] ClientPartToKeep,
 *     serverPart [2] ServerPart
 * }
 * ```
 * 
 * @class
 */
export
class Update_taskPackage {
    /**
     * @summary `clientPart`.
     * @description
     * 
     * Action, database name, schema, and element-set name supplied by the
     * client.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.5.
     * 
     * @public
     * @readonly
     */
    readonly clientPart: ClientPartToKeep;
    /**
     * @summary `serverPart`.
     * @description
     * 
     * Update status once the task is complete or rejected, optional task-level
     * diagnostics, and one structure per supplied record.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.5, EXT.1.5.1.
     * 
     * @public
     * @readonly
     */
    readonly serverPart: ServerPart;

    constructor (
        clientPart: ClientPartToKeep,
        serverPart: ServerPart
    ) {
        this.clientPart = clientPart;
        this.serverPart = serverPart;
    }

    /**
     * @summary Restructures an object into a Update_taskPackage
     * @description
     * 
     * This takes an `object` and converts it to a `Update_taskPackage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Update_taskPackage`.
     * @returns {Update_taskPackage}
     */
    public static _from_object (_o: { [_K in keyof (Update_taskPackage)]: (Update_taskPackage)[_K] }): Update_taskPackage {
        return new Update_taskPackage(_o.clientPart, _o.serverPart);
    }


}

/**
 * @summary The Leading Root Component Types of Update_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Update_taskPackage: $.ComponentSpec[] = [
    new $.ComponentSpec("clientPart", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serverPart", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Update_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Update_taskPackage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Update_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Update_taskPackage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Update_taskPackage: $.ASN1Decoder<Update_taskPackage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Update_taskPackage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Update_taskPackage (el: _Element): Update_taskPackage {
    if (!_cached_decoder_for_Update_taskPackage) { _cached_decoder_for_Update_taskPackage = function (el: _Element): Update_taskPackage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Update-taskPackage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "clientPart";
    sequence[1].name = "serverPart";
    const clientPart: ClientPartToKeep = $._decode_explicit<ClientPartToKeep>(() => _decode_ClientPartToKeep)(sequence[0]);
    const serverPart: ServerPart = $._decode_explicit<ServerPart>(() => _decode_ServerPart)(sequence[1]);
    return new Update_taskPackage(
        clientPart,
        serverPart,

    );
}; }
    return _cached_decoder_for_Update_taskPackage(el);
}

let _cached_encoder_for_Update_taskPackage: $.ASN1Encoder<Update_taskPackage> | null = null;

/**
 * @summary Encodes a(n) Update_taskPackage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Update_taskPackage, encoded as an ASN.1 Element.
 */
export
function _encode_Update_taskPackage (value: Update_taskPackage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Update_taskPackage) { _cached_encoder_for_Update_taskPackage = function (value: Update_taskPackage, elGetter: $.ASN1Encoder<Update_taskPackage>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ClientPartToKeep, $.BER)(value.clientPart, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ServerPart, $.BER)(value.serverPart, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Update_taskPackage(value, elGetter);
}


/* eslint-enable */

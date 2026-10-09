/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartToKeep, _decode_ClientPartToKeep, _encode_ClientPartToKeep } from "../ESFormat-ExportInvocation/ClientPartToKeep.ta.mjs";
import { ServerPart, _decode_ServerPart, _encode_ServerPart } from "../ESFormat-ExportInvocation/ServerPart.ta.mjs";


/**
 * @summary ExportInvocation_taskPackage
 * @description
 * 
 * Export Invocation task package: the retained client parameters and the
 * server's optional progress report. Absent server part means the server
 * has not supplied quantity or cost.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.7, EXT.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExportInvocation-taskPackage ::= SEQUENCE {
 *     clientPart [1] ClientPartToKeep,
 *     serverPart [2] ServerPart OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ExportInvocation_taskPackage {
    /**
     * @summary `clientPart`.
     * @description
     * 
     * Export specification and copy count supplied by the client and kept in
     * the package.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.7, EXT.2.
     * 
     * @public
     * @readonly
     */
    readonly clientPart: ClientPartToKeep;
    /**
     * @summary `serverPart`.
     * @description
     * 
     * Optional estimate and accrued quantity and cost. The server need not
     * supply any of them.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.7.
     * 
     * @public
     * @readonly
     */
    readonly serverPart: OPTIONAL<ServerPart>;

    constructor (
        clientPart: ClientPartToKeep,
        serverPart: OPTIONAL<ServerPart>
    ) {
        this.clientPart = clientPart;
        this.serverPart = serverPart;
    }

    /**
     * @summary Restructures an object into a ExportInvocation_taskPackage
     * @description
     * 
     * This takes an `object` and converts it to a `ExportInvocation_taskPackage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExportInvocation_taskPackage`.
     * @returns {ExportInvocation_taskPackage}
     */
    public static _from_object (_o: { [_K in keyof (ExportInvocation_taskPackage)]: (ExportInvocation_taskPackage)[_K] }): ExportInvocation_taskPackage {
        return new ExportInvocation_taskPackage(_o.clientPart, _o.serverPart);
    }


}

/**
 * @summary The Leading Root Component Types of ExportInvocation_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExportInvocation_taskPackage: $.ComponentSpec[] = [
    new $.ComponentSpec("clientPart", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serverPart", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ExportInvocation_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExportInvocation_taskPackage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExportInvocation_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExportInvocation_taskPackage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExportInvocation_taskPackage: $.ASN1Decoder<ExportInvocation_taskPackage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExportInvocation_taskPackage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExportInvocation_taskPackage (el: _Element): ExportInvocation_taskPackage {
    if (!_cached_decoder_for_ExportInvocation_taskPackage) { _cached_decoder_for_ExportInvocation_taskPackage = function (el: _Element): ExportInvocation_taskPackage {
    let clientPart!: ClientPartToKeep;
    let serverPart: OPTIONAL<ServerPart>;
    const callbacks: $.DecodingMap = {
        "clientPart": (_el: _Element): void => { clientPart = $._decode_explicit<ClientPartToKeep>(() => _decode_ClientPartToKeep)(_el); },
        "serverPart": (_el: _Element): void => { serverPart = $._decode_explicit<ServerPart>(() => _decode_ServerPart)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExportInvocation_taskPackage,
        _extension_additions_list_spec_for_ExportInvocation_taskPackage,
        _root_component_type_list_2_spec_for_ExportInvocation_taskPackage,
        undefined,
    );
    return new ExportInvocation_taskPackage(
        clientPart,
        serverPart
    );
}; }
    return _cached_decoder_for_ExportInvocation_taskPackage(el);
}

let _cached_encoder_for_ExportInvocation_taskPackage: $.ASN1Encoder<ExportInvocation_taskPackage> | null = null;

/**
 * @summary Encodes a(n) ExportInvocation_taskPackage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExportInvocation_taskPackage, encoded as an ASN.1 Element.
 */
export
function _encode_ExportInvocation_taskPackage (value: ExportInvocation_taskPackage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExportInvocation_taskPackage) { _cached_encoder_for_ExportInvocation_taskPackage = function (value: ExportInvocation_taskPackage, elGetter: $.ASN1Encoder<ExportInvocation_taskPackage>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ClientPartToKeep, $.BER)(value.clientPart, $.BER);
    if (value.serverPart !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_ServerPart, $.BER)(value.serverPart, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ExportInvocation_taskPackage(value, elGetter);
}


/* eslint-enable */

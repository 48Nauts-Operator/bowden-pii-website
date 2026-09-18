// Generated from the local Bowden-PII deterministic engine. Fictional examples.
window.BOWDEN_EXAMPLES = {
  "account": {
    "text": "Please update the account contact to mia@example.ch.\nAHV: 756.9217.0769.85\nIBAN: CH93 0076 2011 6238 5295 7\nSend confirmation to mia@example.ch.",
    "policies": {
      "strict": {
        "redacted": "Please update the account contact to [EMAIL_1].\nAHV: [AHV_1]\nIBAN: [IBAN_1]\nSend confirmation to [EMAIL_1].",
        "spans": [
          {
            "start": 37,
            "end": 51,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          },
          {
            "start": 58,
            "end": 74,
            "label": "AHV",
            "source": "rule",
            "rule_id": "ch_ahv_ean13_v1",
            "confidence": 1.0,
            "replacement": "[AHV_1]"
          },
          {
            "start": 81,
            "end": 107,
            "label": "IBAN",
            "source": "rule",
            "rule_id": "iban_iso13616_mod97_v1",
            "confidence": 1.0,
            "replacement": "[IBAN_1]"
          },
          {
            "start": 129,
            "end": 143,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          }
        ]
      },
      "balanced": {
        "redacted": "Please update the account contact to [EMAIL_1].\nAHV: [AHV_1]\nIBAN: [IBAN_1]\nSend confirmation to [EMAIL_1].",
        "spans": [
          {
            "start": 37,
            "end": 51,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          },
          {
            "start": 58,
            "end": 74,
            "label": "AHV",
            "source": "rule",
            "rule_id": "ch_ahv_ean13_v1",
            "confidence": 1.0,
            "replacement": "[AHV_1]"
          },
          {
            "start": 81,
            "end": 107,
            "label": "IBAN",
            "source": "rule",
            "rule_id": "iban_iso13616_mod97_v1",
            "confidence": 1.0,
            "replacement": "[IBAN_1]"
          },
          {
            "start": 129,
            "end": 143,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          }
        ]
      },
      "permissive": {
        "redacted": "Please update the account contact to [EMAIL_1].\nAHV: [AHV_1]\nIBAN: [IBAN_1]\nSend confirmation to [EMAIL_1].",
        "spans": [
          {
            "start": 37,
            "end": 51,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          },
          {
            "start": 58,
            "end": 74,
            "label": "AHV",
            "source": "rule",
            "rule_id": "ch_ahv_ean13_v1",
            "confidence": 1.0,
            "replacement": "[AHV_1]"
          },
          {
            "start": 81,
            "end": 107,
            "label": "IBAN",
            "source": "rule",
            "rule_id": "iban_iso13616_mod97_v1",
            "confidence": 1.0,
            "replacement": "[IBAN_1]"
          },
          {
            "start": 129,
            "end": 143,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          }
        ]
      }
    }
  },
  "support": {
    "text": "Reply to support@example.ch.\nClient IP: 192.0.2.10\nDevice MAC: 00:1A:2B:3C:4D:5E\nDocumentation: https://example.ch/help",
    "policies": {
      "strict": {
        "redacted": "Reply to [EMAIL_1].\nClient IP: [IP_ADDRESS_1]\nDevice MAC: [MAC_ADDRESS_1]\nDocumentation: [URL_1]",
        "spans": [
          {
            "start": 9,
            "end": 27,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          },
          {
            "start": 40,
            "end": 50,
            "label": "IP_ADDRESS",
            "source": "rule",
            "rule_id": "ip_address_stdlib_v1",
            "confidence": 1.0,
            "replacement": "[IP_ADDRESS_1]"
          },
          {
            "start": 63,
            "end": 80,
            "label": "MAC_ADDRESS",
            "source": "rule",
            "rule_id": "mac_address_basic_v1",
            "confidence": 1.0,
            "replacement": "[MAC_ADDRESS_1]"
          },
          {
            "start": 96,
            "end": 119,
            "label": "URL",
            "source": "rule",
            "rule_id": "url_basic_v1",
            "confidence": 1.0,
            "replacement": "[URL_1]"
          }
        ]
      },
      "balanced": {
        "redacted": "Reply to [EMAIL_1].\nClient IP: [IP_ADDRESS_1]\nDevice MAC: [MAC_ADDRESS_1]\nDocumentation: https://example.ch/help",
        "spans": [
          {
            "start": 9,
            "end": 27,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          },
          {
            "start": 40,
            "end": 50,
            "label": "IP_ADDRESS",
            "source": "rule",
            "rule_id": "ip_address_stdlib_v1",
            "confidence": 1.0,
            "replacement": "[IP_ADDRESS_1]"
          },
          {
            "start": 63,
            "end": 80,
            "label": "MAC_ADDRESS",
            "source": "rule",
            "rule_id": "mac_address_basic_v1",
            "confidence": 1.0,
            "replacement": "[MAC_ADDRESS_1]"
          }
        ]
      },
      "permissive": {
        "redacted": "Reply to [EMAIL_1].\nClient IP: 192.0.2.10\nDevice MAC: 00:1A:2B:3C:4D:5E\nDocumentation: https://example.ch/help",
        "spans": [
          {
            "start": 9,
            "end": 27,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          }
        ]
      }
    }
  },
  "invoice": {
    "text": "Please confirm the payment details.\nIBAN: CH93 0076 2011 6238 5295 7\nBilling contact: billing@example.ch\nReference: https://example.ch/invoices",
    "policies": {
      "strict": {
        "redacted": "Please confirm the payment details.\nIBAN: [IBAN_1]\nBilling contact: [EMAIL_1]\nReference: [URL_1]",
        "spans": [
          {
            "start": 42,
            "end": 68,
            "label": "IBAN",
            "source": "rule",
            "rule_id": "iban_iso13616_mod97_v1",
            "confidence": 1.0,
            "replacement": "[IBAN_1]"
          },
          {
            "start": 86,
            "end": 104,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          },
          {
            "start": 116,
            "end": 143,
            "label": "URL",
            "source": "rule",
            "rule_id": "url_basic_v1",
            "confidence": 1.0,
            "replacement": "[URL_1]"
          }
        ]
      },
      "balanced": {
        "redacted": "Please confirm the payment details.\nIBAN: [IBAN_1]\nBilling contact: [EMAIL_1]\nReference: https://example.ch/invoices",
        "spans": [
          {
            "start": 42,
            "end": 68,
            "label": "IBAN",
            "source": "rule",
            "rule_id": "iban_iso13616_mod97_v1",
            "confidence": 1.0,
            "replacement": "[IBAN_1]"
          },
          {
            "start": 86,
            "end": 104,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          }
        ]
      },
      "permissive": {
        "redacted": "Please confirm the payment details.\nIBAN: [IBAN_1]\nBilling contact: [EMAIL_1]\nReference: https://example.ch/invoices",
        "spans": [
          {
            "start": 42,
            "end": 68,
            "label": "IBAN",
            "source": "rule",
            "rule_id": "iban_iso13616_mod97_v1",
            "confidence": 1.0,
            "replacement": "[IBAN_1]"
          },
          {
            "start": 86,
            "end": 104,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          }
        ]
      }
    }
  }
};

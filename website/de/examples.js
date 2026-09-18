// Generated from the local Bowden-PII deterministic engine. Fictional examples.
window.BOWDEN_EXAMPLES = {
  "account": {
    "text": "Bitte ändern Sie die Kontaktadresse auf mia@example.ch.\nAHV: 756.9217.0769.85\nIBAN: CH93 0076 2011 6238 5295 7\nBestätigung bitte an mia@example.ch.",
    "policies": {
      "strict": {
        "redacted": "Bitte ändern Sie die Kontaktadresse auf [EMAIL_1].\nAHV: [AHV_1]\nIBAN: [IBAN_1]\nBestätigung bitte an [EMAIL_1].",
        "spans": [
          {
            "start": 40,
            "end": 54,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          },
          {
            "start": 61,
            "end": 77,
            "label": "AHV",
            "source": "rule",
            "rule_id": "ch_ahv_ean13_v1",
            "confidence": 1.0,
            "replacement": "[AHV_1]"
          },
          {
            "start": 84,
            "end": 110,
            "label": "IBAN",
            "source": "rule",
            "rule_id": "iban_iso13616_mod97_v1",
            "confidence": 1.0,
            "replacement": "[IBAN_1]"
          },
          {
            "start": 132,
            "end": 146,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          }
        ]
      },
      "balanced": {
        "redacted": "Bitte ändern Sie die Kontaktadresse auf [EMAIL_1].\nAHV: [AHV_1]\nIBAN: [IBAN_1]\nBestätigung bitte an [EMAIL_1].",
        "spans": [
          {
            "start": 40,
            "end": 54,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          },
          {
            "start": 61,
            "end": 77,
            "label": "AHV",
            "source": "rule",
            "rule_id": "ch_ahv_ean13_v1",
            "confidence": 1.0,
            "replacement": "[AHV_1]"
          },
          {
            "start": 84,
            "end": 110,
            "label": "IBAN",
            "source": "rule",
            "rule_id": "iban_iso13616_mod97_v1",
            "confidence": 1.0,
            "replacement": "[IBAN_1]"
          },
          {
            "start": 132,
            "end": 146,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          }
        ]
      },
      "permissive": {
        "redacted": "Bitte ändern Sie die Kontaktadresse auf [EMAIL_1].\nAHV: [AHV_1]\nIBAN: [IBAN_1]\nBestätigung bitte an [EMAIL_1].",
        "spans": [
          {
            "start": 40,
            "end": 54,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          },
          {
            "start": 61,
            "end": 77,
            "label": "AHV",
            "source": "rule",
            "rule_id": "ch_ahv_ean13_v1",
            "confidence": 1.0,
            "replacement": "[AHV_1]"
          },
          {
            "start": 84,
            "end": 110,
            "label": "IBAN",
            "source": "rule",
            "rule_id": "iban_iso13616_mod97_v1",
            "confidence": 1.0,
            "replacement": "[IBAN_1]"
          },
          {
            "start": 132,
            "end": 146,
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
    "text": "Antwort bitte an support@example.ch.\nClient-IP: 192.0.2.10\nGeräte-MAC: 00:1A:2B:3C:4D:5E\nDokumentation: https://example.ch/help",
    "policies": {
      "strict": {
        "redacted": "Antwort bitte an [EMAIL_1].\nClient-IP: [IP_ADDRESS_1]\nGeräte-MAC: [MAC_ADDRESS_1]\nDokumentation: [URL_1]",
        "spans": [
          {
            "start": 17,
            "end": 35,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          },
          {
            "start": 48,
            "end": 58,
            "label": "IP_ADDRESS",
            "source": "rule",
            "rule_id": "ip_address_stdlib_v1",
            "confidence": 1.0,
            "replacement": "[IP_ADDRESS_1]"
          },
          {
            "start": 71,
            "end": 88,
            "label": "MAC_ADDRESS",
            "source": "rule",
            "rule_id": "mac_address_basic_v1",
            "confidence": 1.0,
            "replacement": "[MAC_ADDRESS_1]"
          },
          {
            "start": 104,
            "end": 127,
            "label": "URL",
            "source": "rule",
            "rule_id": "url_basic_v1",
            "confidence": 1.0,
            "replacement": "[URL_1]"
          }
        ]
      },
      "balanced": {
        "redacted": "Antwort bitte an [EMAIL_1].\nClient-IP: [IP_ADDRESS_1]\nGeräte-MAC: [MAC_ADDRESS_1]\nDokumentation: https://example.ch/help",
        "spans": [
          {
            "start": 17,
            "end": 35,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          },
          {
            "start": 48,
            "end": 58,
            "label": "IP_ADDRESS",
            "source": "rule",
            "rule_id": "ip_address_stdlib_v1",
            "confidence": 1.0,
            "replacement": "[IP_ADDRESS_1]"
          },
          {
            "start": 71,
            "end": 88,
            "label": "MAC_ADDRESS",
            "source": "rule",
            "rule_id": "mac_address_basic_v1",
            "confidence": 1.0,
            "replacement": "[MAC_ADDRESS_1]"
          }
        ]
      },
      "permissive": {
        "redacted": "Antwort bitte an [EMAIL_1].\nClient-IP: 192.0.2.10\nGeräte-MAC: 00:1A:2B:3C:4D:5E\nDokumentation: https://example.ch/help",
        "spans": [
          {
            "start": 17,
            "end": 35,
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
    "text": "Bitte bestätigen Sie die Zahlungsdaten.\nIBAN: CH93 0076 2011 6238 5295 7\nRechnungskontakt: billing@example.ch\nReferenz: https://example.ch/invoices",
    "policies": {
      "strict": {
        "redacted": "Bitte bestätigen Sie die Zahlungsdaten.\nIBAN: [IBAN_1]\nRechnungskontakt: [EMAIL_1]\nReferenz: [URL_1]",
        "spans": [
          {
            "start": 46,
            "end": 72,
            "label": "IBAN",
            "source": "rule",
            "rule_id": "iban_iso13616_mod97_v1",
            "confidence": 1.0,
            "replacement": "[IBAN_1]"
          },
          {
            "start": 91,
            "end": 109,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          },
          {
            "start": 120,
            "end": 147,
            "label": "URL",
            "source": "rule",
            "rule_id": "url_basic_v1",
            "confidence": 1.0,
            "replacement": "[URL_1]"
          }
        ]
      },
      "balanced": {
        "redacted": "Bitte bestätigen Sie die Zahlungsdaten.\nIBAN: [IBAN_1]\nRechnungskontakt: [EMAIL_1]\nReferenz: https://example.ch/invoices",
        "spans": [
          {
            "start": 46,
            "end": 72,
            "label": "IBAN",
            "source": "rule",
            "rule_id": "iban_iso13616_mod97_v1",
            "confidence": 1.0,
            "replacement": "[IBAN_1]"
          },
          {
            "start": 91,
            "end": 109,
            "label": "EMAIL",
            "source": "rule",
            "rule_id": "email_basic_v1",
            "confidence": 1.0,
            "replacement": "[EMAIL_1]"
          }
        ]
      },
      "permissive": {
        "redacted": "Bitte bestätigen Sie die Zahlungsdaten.\nIBAN: [IBAN_1]\nRechnungskontakt: [EMAIL_1]\nReferenz: https://example.ch/invoices",
        "spans": [
          {
            "start": 46,
            "end": 72,
            "label": "IBAN",
            "source": "rule",
            "rule_id": "iban_iso13616_mod97_v1",
            "confidence": 1.0,
            "replacement": "[IBAN_1]"
          },
          {
            "start": 91,
            "end": 109,
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
